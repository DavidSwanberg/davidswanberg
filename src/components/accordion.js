import AccordionItem from "./accordion-item";
import AccordionLink from "./accordion-link";

const Accordion = () => {
    return (
        <ul className="flex flex-col">
        <AccordionItem
            title="Turf Rep Locator"
            subtitle="A bespoke geolocation tool with a slick UI built with the mapbox api"
        >
            <h3 className="italic">Technologies Used</h3>
            <ul>
                <li>Next.js</li>
                <li>Sanity CMS</li>
                <li>Tailwind</li>
                <li>Mapbox API</li>
                <li>GEOjson data</li>
                <li>GSAP animation library</li>
            </ul>
            <AccordionLink href="https://turf.design/rep-locator">Visit Project</AccordionLink>
        </AccordionItem>
        <AccordionItem 
            title="Turf Inspiration"
            subtitle="Landing page, post filtering, and UI ecosystem for Turf's editorial content"
        >
        <h3 className="italic">Technologies Used</h3>
            <ul>
                <li>Next.js</li>
                <li>Sanity CMS</li>
                <li>Tailwind</li>
                <li>GSAP animation library</li>
                <li>Matter.js 2d physics engine</li>
            </ul>
            <AccordionLink href="https://turf.design/inspiration">Visit Project</AccordionLink>
        </AccordionItem>
        <AccordionItem title="Guild" subtitle="New site build with Gutenberg blocks and unique scroll animations" year="2024">
        <h3 className="italic">Technologies Used</h3>
            <ul>
                <li>Typescript</li>
                <li>Wordpress</li>
                <li>Gutenberg</li>
                <li>GraphQL</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>GSAP animation library</li>
            </ul>
            <AccordionLink href="https://guild.com/">Visit Project</AccordionLink>
        </AccordionItem>
      </ul>
    )
};

export default Accordion;