import "./ContactDetails.css";
import { useState } from "react";

function ContactDetails() {
  const [contactData] = useState([
    {
      id: 1,
      img: "/assets/contact/address.svg",
      title: "Address",
      description: "236 5th SE Avenue, New York NY10000, United States",
    },
    {
      id: 2,
      img: "/assets/contact/phone.svg",
      title: "Phone",
      description: "Mobile: +1 (84) 546-6789, Hotline: +1 (84) 456-6789",
    },
    {
      id: 3,
      img: "/assets/contact/clock.svg",
      title: "Working Time",
      description: "Monday-Friday: 9:00 - 22:00, Saturday-Sunday: 9:00 - 21:00",
    },
  ]);

  return (
    <div className="contact-details">
      {contactData.map((item) => (
        <div className="detail" key={item.id}>
          <img src={item.img} alt={item.title} />
          <p>
            <span>{item.title}</span>
            <br />
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ContactDetails;
