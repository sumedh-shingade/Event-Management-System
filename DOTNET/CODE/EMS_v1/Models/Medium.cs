using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Medium
{
    public int MediaId { get; set; }

    public string? MediaType { get; set; }

    public int? MediaCost { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
