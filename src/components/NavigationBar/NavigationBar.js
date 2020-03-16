import React from "react"
import { Link } from "gatsby";
import "./NavigationBar.css";

export default () => (
<div className="navigation-bar">
  <Link className="navigation-bar__link" to="/our-story/">Story</Link>
  <Link className="navigation-bar__link" to="/venue-details/">Venue</Link>
  <Link className="navigation-bar__link" to="/wedding-schedule/">Schedule</Link>
  <Link className="navigation-bar__link" to="/rsvp/">RSVP</Link>
  <Link className="navigation-bar__link" to="/registry/">Registry</Link>
  <Link className="navigation-bar__link" to="/faq/">FAQ</Link>
</div>
)
