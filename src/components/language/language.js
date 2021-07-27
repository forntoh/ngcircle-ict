import React from "react";

import "./language.scss";

import DE from "../../assets/images/flags/555613.svg";
import EN from "../../assets/images/flags/555417.svg";

export const Language = () => (
    <section className="language-select">
        <ul>
            <li><img src={ DE } alt="German"/></li>
            <li><img src={ EN } alt="English"/></li>
        </ul>
    </section>
);
