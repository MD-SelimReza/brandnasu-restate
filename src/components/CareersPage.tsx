import Link from 'next/link';
import Container from './Container';
import Button from './ui/Button';

interface JobOpening {
  category: string;
  title: string;
  sit: string;
  type: string;
  slug: string;
  deadline: string;
}

const jobOpenings: JobOpening[] = [
  {
    category: 'Development',
    title: 'Full Stack Web Developer',
    slug: 'full-stack-web-developer',
    sit: 'Onsite',
    type: 'Full time',
    deadline: '7 days',
  },
  {
    category: 'Graphic Design',
    title: 'Logo Design Specialist',
    slug: 'logo-design-specialist',
    sit: 'Onsite',
    type: 'Full time',
    deadline: '8 days',
  },
  {
    category: 'Graphic Design',
    title: 'Social Media Designer',
    slug: 'social-media-designer',
    sit: 'Onsite',
    type: 'Full time',
    deadline: 'has passed',
  },
  {
    category: 'Digital Marketing',
    title: 'Cold Email Specialist',
    slug: 'cold-email-specialist',
    sit: 'Remote',
    type: 'Full time',
    deadline: '5 days',
  },
  {
    category: 'Video Editing',
    title: 'Video Editor',
    slug: 'video-editing',
    sit: 'Onsite',
    type: 'Full time',
    deadline: '3 days',
  },
];

const JobCard: React.FC<{ job: JobOpening }> = ({ job }) => {
  return (
    <div className="hover:bg-indigo100 bg-gray100 rounded-xl p-6 mb-4 hover:scale-[1.02] transition-scale duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pr-12">
        <div className="mb-4 md:mb-0">
          <p className="text-darkGray mb-10">{job.category}</p>
          <Link
            href={`job/${job.slug}`}
            className="text-2xl font-bold text-darkIndigo mb-3"
          >
            {job.title}
          </Link>
          <p className="text-darkGray mt-1 flex items-center gap-2">
            <span>{job.sit}</span>
            <span>•</span>
            <span>{job.type}</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-darkGray">Deadline in {job.deadline}</p>
          <div className="text-right space-y-3">
            <div className="text-right space-y-3">
              <Button
                label="Apply Now"
                bgColor={
                  job.deadline === 'has passed'
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-indigo hover:bg-darkIndigo'
                }
                textColor={
                  job.deadline === 'has passed' ? 'text-gray-500' : 'text-white'
                }
                href={job.deadline === 'has passed' ? '#' : `job/${job.slug}`}
                disabled={job.deadline === 'has passed'}
              />
            </div>
          </div>
        </div>
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
