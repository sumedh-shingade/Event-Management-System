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
    public class DecorationsController : ControllerBase
    {
        private readonly EmsDBContext _context;

        public DecorationsController(EmsDBContext context)
        {
            _context = context;
        }

        // GET: api/Decorations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Decoration>>> GetDecorations()
        {
          if (_context.Decorations == null)
          {
              return NotFound();
          }
            return await _context.Decorations.ToListAsync();
        }

        // GET: api/Decorations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Decoration>> GetDecoration(int id)
        {
          if (_context.Decorations == null)
          {
              return NotFound();
          }
            var decoration = await _context.Decorations.FindAsync(id);

            if (decoration == null)
            {
                return NotFound();
            }

            return decoration;
        }

        // PUT: api/Decorations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDecoration(int id, Decoration decoration)
        {
            if (id != decoration.DecorationId)
            {
                return BadRequest();
            }

            _context.Entry(decoration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DecorationExists(id))
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

        // POST: api/Decorations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Decoration>> PostDecoration(Decoration decoration)
        {
          if (_context.Decorations == null)
          {
              return Problem("Entity set 'EmsDBContext.Decorations'  is null.");
          }
            _context.Decorations.Add(decoration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDecoration", new { id = decoration.DecorationId }, decoration);
        }

        // DELETE: api/Decorations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDecoration(int id)
        {
            if (_context.Decorations == null)
            {
                return NotFound();
            }
            var decoration = await _context.Decorations.FindAsync(id);
            if (decoration == null)
            {
                return NotFound();
            }

            _context.Decorations.Remove(decoration);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DecorationExists(int id)
        {
            return (_context.Decorations?.Any(e => e.DecorationId == id)).GetValueOrDefault();
        }
    }
}
