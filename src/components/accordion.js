import AccordionItem from "./accordion-item";

const Accordion = () => {
    return (
        <ul className="flex flex-col">
        <AccordionItem title="Turf Rep Locator" subtitle="Find a rep near you" year="2024">
            <p>A bespoke geolocation tool with a slick ui that utilizes geojson data and the mapbox api to help users find a sales rep based on a given location.</p>
            <h3>Technologies Used</h3>
            <ul>
                <li>Next.js</li>
                <li>Sanity CMS</li>
                <li>Tailwind</li>
                <li>Mapbox API</li>
                <li>GEOjson data</li>
                <li>GSAP animation library</li>
            </ul>
        </AccordionItem>
        <AccordionItem title="Turf Inspiration" subtitle="Get inspired" year="2023">
        <p>Landing page and CMS ecosystem for Turfs editorial content.</p>
        <h3>Technologies Used</h3>
            <ul>
                <li>Next.js</li>
                <li>Sanity CMS</li>
                <li>Tailwind</li>
                <li>GSAP animation library</li>
                <li>Matter.js 2d physics engine</li>
            </ul>
        </AccordionItem>
        <AccordionItem title="Amazon Design Community" subtitle="Join the community" year="2024">
            children
        </AccordionItem>
      </ul>
    )
};

export default Accordion;