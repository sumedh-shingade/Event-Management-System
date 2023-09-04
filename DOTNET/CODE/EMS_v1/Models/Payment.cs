using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public string? Status { get; set; }

    public int? VenueAmt { get; set; }

    public int? CateringAmt { get; set; }

    public int? MediaAmt { get; set; }

    public int? DecorationAmt { get; set; }

    public int? Total { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
