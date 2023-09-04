using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Booking
{
    public int EventId { get; set; }

    public string EventName { get; set; } = null!;

    public TimeOnly StartTime { get; set; }

    public TimeOnly EndTime { get; set; }

    public DateOnly Date { get; set; }

    public int? ExpAttendee { get; set; }

    public int? VenueId { get; set; }

    public int? CateringId { get; set; }

    public int? DecorationId { get; set; }

    public int? MediaId { get; set; }

    public int? PaymentId { get; set; }

    public string? EmailId { get; set; }

    public virtual Catering? Catering { get; set; }

    public virtual Decoration? Decoration { get; set; }

    public virtual Medium? Media { get; set; }

    public virtual Payment? Payment { get; set; }

    public virtual Venue? Venue { get; set; }
}
