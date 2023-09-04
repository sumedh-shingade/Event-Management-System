using System;
using System.Collections.Generic;

namespace EMS.Models;

public partial class Account
{
    public string EmailId { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Address { get; set; }

    public string? MobNo { get; set; }

    public string Role { get; set; } = null!;
}
