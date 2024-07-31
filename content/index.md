---
title: Cover
layout: cover
order: 1
menu: false
toc: false
outputs:
  - html
image: figures/cover-background.jpg
---

<div class="other-format-buttons">

- [Read Online](/contents/) {.button}
{% for link in publication.resource_link %}
{% if link.type == "other-format" %}
- [{{ link.name }}]({{ link.url }}) {.button}
{% endif %}
{% endfor %}

</div>

> “If we are to protect cultural heritage, we need to know what we are trying to protect and where it is. The authors have been grappling with these issues for many years, and they have set out an insightful, comprehensive, and thoughtful contribution to the debate. An essential read for all involved in protecting our heritage.” *—Peter G. Stone, UNESCO Chair in Cultural Property Protection and Peace, and President, The Blue Shield*

<div class="cover-description">

{{ publication.description.full }}

</div>

> “The book seamlessly integrates praxis with relevant theoretical frameworks, principles, and guidelines. It equips readers with a diverse toolkit for the increasing use and implementation of digital methodologies in crafting comprehensive inventories and surveys of heritage sites. These foundational works serve as the basis for formulating effective management and conservation strategies crucial for conserving our cultural heritage assets.
>
> “Moreover, it offers a systematic approach, precise terminology, and engagement tools tailored for community participation throughout the inventory process. Its methodologies are adaptable and accessible, catering to a broad spectrum of stakeholders, including not-for-profit organizations, governmental bodies, policymakers, educators, and industry professionals engaged in heritage site identification. This universality facilitates producing adequate inventories for the safeguarding of heritage sites on a global scale. I am sure our community will adopt this work, recognizing its inherent potential and opportunities.” *—Mario Santana Quintero, Honorary President ICOMOS/ISPRS CIPA Heritage Documentation and Professor at Carleton University*

> “A perfect travel companion for those about to embark on the long and winding, but oh, so beautiful, road of *Inventories and Surveys*.” *—Leen Meganck, Head of Architectural Research, Flanders Heritage Agency, Belgium*
