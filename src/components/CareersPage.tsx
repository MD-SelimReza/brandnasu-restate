import Container from './Container';
import Button from './ui/Button';

interface JobOpening {
  category: string;
  title: string;
  sit: string;
  type: string;
}

const jobOpenings: JobOpening[] = [
  {
    category: 'Development',
    title: 'Full Stack Web Developer',
    sit: 'Onsite',
    type: 'Full time',
  },
  {
    category: 'Graphic Design',
    title: 'Logo Design Specialist',
    sit: 'Onsite',
    type: 'Full time',
  },
  {
    category: 'Graphic Design',
    title: 'Social Media Designer',
    sit: 'Onsite',
    type: 'Full time',
  },
  {
    category: 'Digital Marketing',
    title: 'Cold Email Specialist',
    sit: 'Remote',
    type: 'Full time',
  },
  {
    category: 'Video Editing',
    title: 'Video Editor',
    sit: 'Onsite',
    type: 'Full time',
  },
];

const JobCard: React.FC<{ job: JobOpening }> = ({ job }) => {
  return (
    <div className="hover:bg-indigo100 bg-gray100 rounded-xl p-6 mb-4 hover:scale-[1.02] transition-scale duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-darkGray mb-10">{job.category}</p>
          <h2 className="text-2xl font-bold text-darkIndigo mb-3">
            {job.title}
          </h2>
          <p className="text-darkGray mt-1 flex items-center gap-2">
            <span>{job.sit}</span>
            <span>•</span>
            <span>{job.type}</span>
          </p>
        </div>
        <Button
          bgColor="bg-indigo hover:bg-darkIndigo"
          textColor="text-white"
          label="Apply Now"
        />
      </div>
    </div>
  );
};

const CareersPage = () => {
  return (
    <section className="py-10 bg-white">
      <Container>
        <main className="w-full mx-auto">
          <div className="mb-10">
            <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
              Career
            </h1>
            <h3 className="text-3xl lg:text-4xl font-semibold mb-8 text-darkIndigo">
              Open Opportunities
            </h3>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, idx) => (
              <JobCard key={idx} job={job} />
            ))}
          </div>
        </main>
      </Container>
    </section>
  );
};

export default CareersPage;
