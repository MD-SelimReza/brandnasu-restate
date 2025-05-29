import TableOfContents from '@/components/TableOfContents';
import Subscription from './Subscription';
import Image from 'next/image';

const logoCostData = [
  {
    option: 'Do It Yourself (DIY Tools)',
    average: '$10 - $50 (subscription fees)',
    range: '$10 - $300 (software costs vary based on tool)',
  },
  {
    option: 'Customized Logo Template',
    average: '$20 - $45 (per template)',
    range: '$5 - $300+ (based on platform and customization)',
  },
  {
    option: 'Crowdsourcing/Design Contests',
    average: '$250 - $500',
    range: '$100 - $1,500 (varies by platform and designer level)',
  },
  {
    option: 'Freelance Designer',
    average: '$250 - $500 (project-based)',
    range: '$100 - $2,500 (based on experience and platform)',
  },
  {
    option: 'Design Agency',
    average: '$1,000 - $5,000',
    range: '$3,000 - $10,000+ (full branding service included)',
  },
];

const tools = [
  {
    name: 'Adobe Illustrator',
    description:
      'Adobe Illustrator is a popular choice for vector graphics. Its compatibility with other Adobe tools makes it ideal for detailed designs. This tool supports over 10 formats for both digital and print use.',
    pricing: 'Annual plan: $22.99/month (Creative Cloud)',
  },
  {
    name: 'Canva',
    description:
      'Canva provides user-friendly options at $50 annually or $55 monthly. With access to thousands of templates, it’s easy to customize designs to suit personal branding needs.',
    pricing: 'Annual: $50 / Monthly: $55',
  },
  {
    name: 'Sketch',
    description:
      'Sketch is another vector-based tool with flexible pricing, starting at $10 monthly. It’s excellent for digital design and offers export options like SVG, JPG, PNG, and PDF.',
    pricing: 'Starts at $10/month',
    note: 'Not ideal for print due to lack of CMYK support.',
  },
  {
    name: 'Vectr',
    description:
      'Vectr offers a simple and free option for vector design, available online or as a desktop app. It supports formats like AI, PNG, JPG, and SVG.',
    pricing: 'Free (Premium: $3.99–$7.99/month)',
  },
];

const pros = [
  'Cost-Effective: Save money compared to hiring a designer.',
  'Creative Control: Full control over your design vision.',
  'Flexibility: Templates, customization, and quick adjustments.',
  'Learning Opportunity: Build design skills and familiarity.',
  'Access to Resources: Tutorials and assets for beginners.',
];

const cons = [
  'Time-Consuming: Learning and refining takes effort.',
  'Limited Professional Quality: May lack polish without experience.',
  'Overused Designs: Templates can reduce originality.',
];

export default function BlogDetailsPage() {
  return (
    <div className="flex flex-row gap-8 px-5 mx-auto py-10 max-w-[1440px] top-32">
      <aside className="md:">
        <TableOfContents />
      </aside>
      <div className="w-full flex flex-col gap-20">
        <div id="logo-design-cost" className="pt-10"></div>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo mb-8">
            Logo Design Cost: At A Glance
          </h2>
          <div className="space-y-5">
            <Image
              src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission3.jpg"
              alt="Blog Hero Image"
              width={2048}
              height={2048}
              priority
            />
            <p className="text-darkGray text-sm flex gap-2 border-y py-3">
              <span className="font-medium">Last Update:</span>
              <span>10 May 2025</span>
            </p>
            <p className="text-darkGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              animi! Saepe aperiam, quidem numquam officia quibusdam alias dicta
              quisquam rem.
            </p>
            <p className="text-darkGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam cumque, odit dignissimos in totam officia iste
              veritatis rerum a, accusamus optio vitae sint. Fugiat aliquid,
              fugit cumque libero distinctio amet eos totam. Odio, nemo dolor.
            </p>
            <p className="text-darkGray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae placeat, rem voluptate dignissimos ea eum, quos nihil
              saepe hic numquam quae esse voluptates? Aperiam similique
              provident rerum reiciendis nesciunt officiis explicabo optio omnis
              rem id quisquam incidunt impedit in reprehenderit fugiat sed vero
              sunt exercitationem, quam voluptatibus nisi! Earum, consectetur?
            </p>
          </div>
          <div id="importance-of-logo" className="pt-10"></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo mb-8">
            Why Logo Design is Important for a Brand?
          </h2>
          <div className="overflow-x-auto border border-gray-200">
            <table className="min-w-full text-left text-sm text-darkGray">
              <thead className="bg-lightGray text-darkGray font-semibold">
                <tr>
                  <th className="p-4 border border-gray-200">
                    Logo Design Option
                  </th>
                  <th className="p-4 border border-gray-200">Average Cost</th>
                  <th className="p-4 border border-gray-200">
                    Overall Pricing Range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {logoCostData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border border-gray-200">
                      {row.option}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {row.average}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {row.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="cost-to-design" className="pt-10"></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo mb-8">
            How Much Does It Cost to Design a Logo?
          </h2>
          <div className="space-y-5">
            <Image
              src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission3.jpg"
              alt="Blog Hero Image"
              width={2048}
              height={2048}
              priority
            />
            <p className="text-darkGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              animi! Saepe aperiam, quidem numquam officia quibusdam alias dicta
              quisquam rem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ex est nulla aspernatur? Sint molestiae quisquam veritatis
              quidem modi veniam, obcaecati et repellat, quam, culpa a!
            </p>
            <p className="text-darkGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam cumque, odit dignissimos in totam officia iste
              veritatis rerum a, accusamus optio vitae sint. Fugiat aliquid,
              fugit cumque libero distinctio amet eos totam. Odio, nemo dolor.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              error culpa commodi reiciendis odio unde.
            </p>
            <p className="text-darkGray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae placeat, rem voluptate dignissimos ea eum, quos nihil
              saepe hic numquam quae esse voluptates? Aperiam similique
              provident rerum reiciendis nesciunt officiis explicabo optio omnis
              rem id quisquam incidunt impedit in reprehenderit fugiat sed vero
              sunt exercitationem, quam voluptatibus nisi! Earum, consectetur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              odio id quam. Inventore deserunt culpa soluta incidunt ea fuga.
              Enim?
            </p>
          </div>
          <div id="freelancer-vs-agency" className="pt-10"></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo mb-8">
            Freelance Graphics Designer VS Agency
          </h2>
          <div>
            <p className="text-darkGray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur laboriosam dolore velit illo aliquam exercitationem
              obcaecati aperiam vero tempore quae odio repudiandae, aspernatur
              eligendi veniam voluptate accusamus eius repellat a minus ratione,
              nostrum facere! Quaerat consequuntur commodi dolor nesciunt?
              Veritatis ex nesciunt quod dolor autem.
            </p>

            <h3 className="text-2xl text-darkIndigo font-bold mt-10 mb-6">
              Do It Yourself
            </h3>
            <div className="space-y-6">
              <Image
                src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission3.jpg"
                alt="Blog Hero Image"
                width={2048}
                height={2048}
                priority
              />
              <p className="text-darkGray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium nemo, culpa debitis ea voluptas corrupti magni non
                ad id. Voluptates quaerat natus tempore fugiat ipsum repellendus
                minus, aperiam dignissimos quod labore dolores eveniet, odit
                culpa a impedit, obcaecati distinctio enim. Natus totam
                voluptatem ipsum cumque suscipit quas ullam harum rerum. Facere
                magni, totam accusamus quibusdam nulla corrupti in assumenda
                consequatur, quod adipisci at earum quos ad eaque magnam odit
                perspiciatis.
              </p>

              <div className="overflow-x-auto border border-gray-200">
                <table className="min-w-full text-left text-sm text-darkGray">
                  <thead className="bg-lightGray text-darkGray font-semibold">
                    <tr>
                      <th className="p-4 border border-gray-200">
                        Logo Design Option
                      </th>
                      <th className="p-4 border border-gray-200">
                        Average Cost
                      </th>
                      <th className="p-4 border border-gray-200">
                        Overall Pricing Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {logoCostData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">
                          {row.option}
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          {row.average}
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          {row.range}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-6">
                {tools.map((tool, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl text-darkIndigo font-semibold mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-darkGray mb-2">{tool.description}</p>
                    <p className="text-darkGray">{tool.pricing}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-8 mt-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-2 text-darkIndigo">
                    Pros:
                  </h4>
                  <ol className="list-decimal list-inside pl-6 text-darkGray space-y-1">
                    {pros.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2 text-darkIndgio">
                    Cons:
                  </h4>
                  <ol className="list-decimal list-inside pl-6 text-darkGray space-y-1">
                    {cons.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div id="pricing-factors" className="pt-10"></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo">
            Pricing Factors of Designing a Logo
          </h2>
          <div>
            <p className="text-darkGray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur laboriosam dolore velit illo aliquam exercitationem
              obcaecati aperiam vero tempore quae odio repudiandae, aspernatur
              eligendi veniam voluptate accusamus eius repellat a minus ratione,
              nostrum facere! Quaerat consequuntur commodi dolor nesciunt?
              Veritatis ex nesciunt quod dolor autem.
            </p>

            <h3 className="text-2xl text-darkIndigo font-bold mt-10 mb-6">
              Do It Yourself
            </h3>
            <div className="space-y-6">
              <Image
                src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission3.jpg"
                alt="Blog Hero Image"
                width={2048}
                height={2048}
                priority
              />
              <p className="text-darkGray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium nemo, culpa debitis ea voluptas corrupti magni non
                ad id. Voluptates quaerat natus tempore fugiat ipsum repellendus
                minus, aperiam dignissimos quod labore dolores eveniet, odit
                culpa a impedit, obcaecati distinctio enim. Natus totam
                voluptatem ipsum cumque suscipit quas ullam harum rerum. Facere
                magni, totam accusamus quibusdam nulla corrupti in assumenda
                consequatur, quod adipisci at earum quos ad eaque magnam odit
                perspiciatis.
              </p>

              <div className="overflow-x-auto border border-gray-200">
                <table className="min-w-full text-left text-sm text-darkGray">
                  <thead className="bg-lightGray text-darkGray font-semibold">
                    <tr>
                      <th className="p-4 border border-gray-200">
                        Logo Design Option
                      </th>
                      <th className="p-4 border border-gray-200">
                        Average Cost
                      </th>
                      <th className="p-4 border border-gray-200">
                        Overall Pricing Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {logoCostData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">
                          {row.option}
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          {row.average}
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          {row.range}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-6">
                {tools.map((tool, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl text-darkIndigo font-semibold mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-darkGray mb-2">{tool.description}</p>
                    <p className="text-darkGray">{tool.pricing}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-8 mt-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-2 text-darkIndigo">
                    Pros:
                  </h4>
                  <ol className="list-decimal list-inside pl-6 text-darkGray space-y-1">
                    {pros.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2 text-darkIndgio">
                    Cons:
                  </h4>
                  <ol className="list-decimal list-inside pl-6 text-darkGray space-y-1">
                    {cons.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div id="final-discussion" className="pt-10"></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo mb-8">
            Final Discussion
          </h2>
          <div>
            <p className="text-darkGray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur laboriosam dolore velit illo aliquam exercitationem
              obcaecati aperiam vero tempore quae odio repudiandae, aspernatur
              eligendi veniam voluptate accusamus eius repellat a minus ratione,
              nostrum facere! Quaerat consequuntur commodi dolor nesciunt?
              Veritatis ex nesciunt quod dolor autem.
            </p>

            <h3 className="text-2xl text-darkIndigo font-bold mt-10 mb-6">
              Do It Yourself
            </h3>
            <div className="space-y-6">
              <Image
                src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission3.jpg"
                alt="Blog Hero Image"
                width={2048}
                height={2048}
                priority
              />
              <p className="text-darkGray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium nemo, culpa debitis ea voluptas corrupti magni non
                ad id. Voluptates quaerat natus tempore fugiat ipsum repellendus
                minus, aperiam dignissimos quod labore dolores eveniet, odit
                culpa a impedit, obcaecati distinctio enim. Natus totam
                voluptatem ipsum cumque suscipit quas ullam harum rerum. Facere
                magni, totam accusamus quibusdam nulla corrupti in assumenda
                consequatur, quod adipisci at earum quos ad eaque magnam odit
                perspiciatis.
              </p>

              <div className="overflow-x-auto border border-gray-200">
                <table className="min-w-full text-left text-sm text-darkGray">
                  <thead className="bg-lightGray text-darkGray font-semibold">
                    <tr>
                      <th className="p-4 border border-gray-200">
                        Logo Design Option
                      </th>
                      <th className="p-4 border border-gray-200">
                        Average Cost
                      </th>
                      <th className="p-4 border border-gray-200">
                        Overall Pricing Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {logoCostData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">
                          {row.option}
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          {row.average}
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          {row.range}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-6">
                {tools.map((tool, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl text-darkIndigo font-semibold mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-darkGray mb-2">{tool.description}</p>
                    <p className="text-darkGray">{tool.pricing}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-8 mt-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-2 text-darkIndigo">
                    Pros:
                  </h4>
                  <ol className="list-decimal list-inside pl-6 text-darkGray space-y-1">
                    {pros.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2 text-darkIndgio">
                    Cons:
                  </h4>
                  <ol className="list-decimal list-inside pl-6 text-darkGray space-y-1">
                    {cons.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div id="faq" className="pt-10"></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-darkIndigo mb-8">
            FAQs on Logo Design Cost
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button className="mb-2 text-darkIndigo w-full text-xl text-left flex justify-between items-center font-semibold focus:outline-none">
                  {faq.question}
                </button>
                <div className="pb-4 text-darkGray">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <aside className="md:">
        <Subscription />
      </aside>
    </div>
  );
}

const faqs = [
  {
    question: 'How much should a small business expect to pay for a logo?',
    answer:
      'Small businesses can expect to pay anywhere from $50 to $2,000 for a logo. Budget-friendly options include online logo makers and freelance designers, typically between $50 and $500. For a more customized and professionally crafted logo, prices can go up to $2,000, especially when working with experienced designers or agencies.',
  },
  {
    question: 'Is it worth investing in a high-priced logo designer?',
    answer:
      'Investing in a high-priced logo designer can be worthwhile if you seek a unique, high-quality logo that effectively represents your brand. Experienced designers bring expertise, creativity, and a deep understanding of branding principles, which can result in a logo that stands out and supports your business goals.',
  },
  {
    question: 'What are the average prices for different logo design services?',
    answer:
      'On average, DIY logo makers cost between $10 and $100, freelance designers charge $100 to $2,500, and design agencies typically range from $1,000 to $5,000 or more. Crowdsourcing platforms may offer logos starting around $100, providing a balance between cost and professional quality.',
  },
  {
    question: 'Can I get a quality logo through DIY methods?',
    answer:
      'Yes, DIY methods can produce quality logos, especially with the variety of online tools available today. Platforms like Canva or Adobe Spark offer customizable templates to help you create a professional-looking logo without extensive design skills.',
  },
  {
    question: 'What should I look for when choosing a logo designer?',
    answer:
      'When selecting a logo designer, review their portfolio to assess their style and quality. Check client testimonials and reviews for reliability and professionalism. Ensure they understand your brand vision and can communicate effectively.',
  },
  {
    question: 'How Much To Charge For a Logo Design Beginner?',
    answer:
      'As a beginner, charging $50 to $150 for a simple logo design is reasonable. For more complex logos, consider pricing between $300 and $500. Adjust based on project complexity and client budget.',
  },
];
