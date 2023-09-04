using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Venue
{
    public int VenueId { get; set; }

    public string? Name { get; set; }

    public string? Address { get; set; }

    public string? Location { get; set; }

    public int? VenueCost { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
