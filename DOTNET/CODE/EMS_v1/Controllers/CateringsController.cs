using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EMS.Data;
using EMS.Models;

namespace EMS_v1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CateringsController : ControllerBase
    {
        private readonly EmsDBContext _context;

        public CateringsController(EmsDBContext context)
        {
            _context = context;
        }

        // GET: api/Caterings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Catering>>> GetCaterings()
        {
          if (_context.Caterings == null)
          {
              return NotFound();
          }
            return await _context.Caterings.ToListAsync();
        }

        // GET: api/Caterings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Catering>> GetCatering(int id)
        {
          if (_context.Caterings == null)
          {
              return NotFound();
          }
            var catering = await _context.Caterings.FindAsync(id);

            if (catering == null)
            {
                return NotFound();
            }

            return catering;
        }

        // PUT: api/Caterings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCatering(int id, Catering catering)
        {
            if (id != catering.CateringId)
            {
                return BadRequest();
            }

            _context.Entry(catering).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CateringExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Caterings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Catering>> PostCatering(Catering catering)
        {
          if (_context.Caterings == null)
          {
              return Problem("Entity set 'EmsDBContext.Caterings'  is null.");
          }
            _context.Caterings.Add(catering);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCatering", new { id = catering.CateringId }, catering);
        }

        // DELETE: api/Caterings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCatering(int id)
        {
            if (_context.Caterings == null)
            {
                return NotFound();
            }
            var catering = await _context.Caterings.FindAsync(id);
            if (catering == null)
            {
                return NotFound();
            }

            _context.Caterings.Remove(catering);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CateringExists(int id)
        {
            return (_context.Caterings?.Any(e => e.CateringId == id)).GetValueOrDefault();
        }
    }
}
