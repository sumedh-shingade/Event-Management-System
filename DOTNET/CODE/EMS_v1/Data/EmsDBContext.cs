using System;
using System.Collections.Generic;
using EMS.Models;
using Microsoft.EntityFrameworkCore;

namespace EMS.Data;

public partial class EmsDBContext : DbContext
{
    public EmsDBContext(DbContextOptions<EmsDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Catering> Caterings { get; set; }

    public virtual DbSet<Decoration> Decorations { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Medium> Media { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Venue> Venues { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.EmailId).HasName("PRIMARY");

            entity.ToTable("accounts");

            entity.Property(e => e.EmailId).HasColumnName("email_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.MobNo)
                .HasMaxLength(20)
                .HasColumnName("mob_no");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .HasColumnName("role");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.EventId).HasName("PRIMARY");

            entity.ToTable("bookings");

            entity.HasIndex(e => e.CateringId, "catering_id");

            entity.HasIndex(e => e.DecorationId, "decoration_id");

            entity.HasIndex(e => e.MediaId, "media_id");

            entity.HasIndex(e => e.PaymentId, "payment_id");

            entity.HasIndex(e => e.VenueId, "venue_id");

            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.CateringId).HasColumnName("catering_id");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.DecorationId).HasColumnName("decoration_id");
            entity.Property(e => e.EmailId)
                .HasMaxLength(255)
                .HasColumnName("email_id");
            entity.Property(e => e.EndTime)
                .HasColumnType("time")
                .HasColumnName("end_time");
            entity.Property(e => e.EventName)
                .HasMaxLength(255)
                .HasColumnName("event_name");
            entity.Property(e => e.ExpAttendee).HasColumnName("exp_attendee");
            entity.Property(e => e.MediaId).HasColumnName("media_id");
            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.StartTime)
                .HasColumnType("time")
                .HasColumnName("start_time");
            entity.Property(e => e.VenueId).HasColumnName("venue_id");

            entity.HasOne(d => d.Catering).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.CateringId)
                .HasConstraintName("bookings_ibfk_2");

            entity.HasOne(d => d.Decoration).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.DecorationId)
                .HasConstraintName("bookings_ibfk_3");

            entity.HasOne(d => d.Media).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.MediaId)
                .HasConstraintName("bookings_ibfk_4");

            entity.HasOne(d => d.Payment).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.PaymentId)
                .HasConstraintName("bookings_ibfk_5");

            entity.HasOne(d => d.Venue).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.VenueId)
                .HasConstraintName("bookings_ibfk_1");
        });

        modelBuilder.Entity<Catering>(entity =>
        {
            entity.HasKey(e => e.CateringId).HasName("PRIMARY");

            entity.ToTable("catering");

            entity.Property(e => e.CateringId).HasColumnName("catering_id");
            entity.Property(e => e.Menu)
                .HasMaxLength(255)
                .HasColumnName("menu");
            entity.Property(e => e.MenuCost).HasColumnName("menu_cost");
        });

        modelBuilder.Entity<Decoration>(entity =>
        {
            entity.HasKey(e => e.DecorationId).HasName("PRIMARY");

            entity.ToTable("decoration");

            entity.Property(e => e.DecorationId).HasColumnName("decoration_id");
            entity.Property(e => e.DecorCost).HasColumnName("decor_cost");
            entity.Property(e => e.DecorType)
                .HasMaxLength(255)
                .HasColumnName("decor_type");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            //entity
            //    .HasNoKey()
            //    .ToTable("login");

            entity.HasKey(e => e.EmailId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.Property(e => e.EmailId)
                .HasMaxLength(255)
                .HasColumnName("email_id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
        });

        modelBuilder.Entity<Medium>(entity =>
        {
            entity.HasKey(e => e.MediaId).HasName("PRIMARY");

            entity.ToTable("media");

            entity.Property(e => e.MediaId).HasColumnName("media_id");
            entity.Property(e => e.MediaCost).HasColumnName("media_cost");
            entity.Property(e => e.MediaType)
                .HasMaxLength(255)
                .HasColumnName("media_type");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.CateringAmt).HasColumnName("catering_amt");
            entity.Property(e => e.DecorationAmt).HasColumnName("decoration_amt");
            entity.Property(e => e.MediaAmt).HasColumnName("media_amt");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasColumnName("status");
            entity.Property(e => e.Total).HasColumnName("total");
            entity.Property(e => e.VenueAmt).HasColumnName("venue_amt");
        });

        modelBuilder.Entity<Venue>(entity =>
        {
            entity.HasKey(e => e.VenueId).HasName("PRIMARY");

            entity.ToTable("venue");

            entity.Property(e => e.VenueId).HasColumnName("venue_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .HasColumnName("location");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.VenueCost).HasColumnName("venue_cost");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
