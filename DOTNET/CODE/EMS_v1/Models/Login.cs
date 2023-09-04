using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EMS.Models;

public partial class Login
{
    public string? EmailId { get; set; }

    public string Password { get; set; } = null!;
}
