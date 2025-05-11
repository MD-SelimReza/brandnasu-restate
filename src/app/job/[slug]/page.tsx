import JobDetails from '@/components/JobDetails';

export default function JobPage() {
  return (
    <JobDetails
      title="Full Stack Web Development"
      sit="Onsite"
      type="Full time"
      deadline="9 days"
      description={`Do you love to think outside the box and deeply consider UI interactions for every element? We are searching for Senior / Mid-Senior UI/UX designers who are eager to take on the challenge of creating an “Outstanding Design Project. We are prepared to elevate your creativity. For now, we would like to see your courage and confidence. We aim to set a benchmark as we have done before. As a senior designer, you'll become integral to Musemind's vibrant design culture by collaborating with our talented other designers.
        `}
      responsibilities={[
        'Create intuitive, aesthetically pleasing, and functional user interfaces and experiences for web and mobile applications.',
        'Define stakeholder and user needs to drive design decisions.',
        'Establish design languages, visual strategies, and interfaces.',
        'Develop interactive prototypes and wireframes to visualize and test concepts.',
        'Maintain design systems, guidelines, and best practices for consistency.',
        'Rapidly generate multiple design patterns and explain each section in detail.',
        'Collaborate with cross-functional team members including animators, project managers, and other designers.',
        'Mentor junior designers and support their professional growth.',
        'Stay updated with the latest design trends, tools, and technologies.',
      ]}
      minimumQualifications={[
        '3 to 5 years of experience in UI/UX design with a strong portfolio.',
        'Proficiency in Figma, Adobe Creative Suite, and ProtoPie.',
        'Ability to effectively utilize AI tools in the design process.',
        'Strong grasp of user-centered design, accessibility, scalability, and storytelling.',
        'Experience with agile methodologies and design thinking.',
        'Excellent communication and presentation skills.',
        'Strong collaboration skills across departments and teams.',
      ]}
      preferredQualifications={[
        'Diploma or coursework in Human-Computer Interaction (HCI), or equivalent.',
        'Bachelor’s degree in Design is an advantage.',
        'Excellent spoken and written English.',
        'Working knowledge of HTML/CSS and JavaScript from a designer’s perspective.',
        'Problem-solving and analytical mindset with strong attention to detail.',
        'Leadership skills to inspire and guide design teams.',
      ]}
      benefits={[
        'Salary: Negotiable.',
        'Two weekly holidays.',
        'Fully subsidized lunch and snacks.',
        'Annual salary reviews.',
        'Two festival bonuses.',
        'Opportunities for professional development.',
        'Creative and collaborative environment.',
        'Team hangouts and sports events (Table Tennis, Foosball, etc).',
        'Health insurance after 1 year of service.',
        'Long service benefit program.',
      ]}
    />
  );
}
