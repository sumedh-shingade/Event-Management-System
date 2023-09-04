using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Decoration
{
    public int DecorationId { get; set; }

    public string? DecorType { get; set; }

    public int? DecorCost { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
