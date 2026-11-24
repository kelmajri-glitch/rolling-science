# Resource Availability Log

This log records operational interruptions without turning quota messages into assumed schedules or cost estimates.

## Recording rules

For each event, record the exact user-reported message where available, the date/time observed, the affected station or service, the task affected, and what work could continue. Do not infer the provider's quota algorithm, reset reliability, or actual work cost from a displayed reset time.

## Events

### 2026-11-24 — Gemini availability interruption

- **Source:** user-reported interface message.
- **Message:** "بلغتَ الحدّ الأقصى للاستخدام · وستتم إعادة الضبط في 8:32 م"
- **Affected work:** Gemini PKG-01, expected scientific/educational brief for Alnatiq.
- **What is known:** the interface displayed a usage-limit message and a reset time.
- **What is not established:** quota calculation method, reset reliability, exact restoration, duration of effective interruption, or cost of the station's absence.
- **Work that can continue:** repository organization, evidence preparation, methodological work, and independent source research where available.

Earlier reports about other stations should be added as separate dated events only when their exact message and observation context are available.
