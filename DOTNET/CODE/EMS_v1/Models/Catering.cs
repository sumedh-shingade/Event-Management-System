using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Catering
{
    public int CateringId { get; set; }

    public string? Menu { get; set; }

    public int? MenuCost { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
