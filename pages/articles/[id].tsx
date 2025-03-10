import { useRouter } from 'next/router';
import ArticleDetail from '../../components/ArticleDetail';

interface Article {
  title: string;
  content: string[];
  images: string[];
}

export const articlesData: { [key: string]: Article } = {
  article1: {
    title: 'Trading',
    content: [
      'Carbonaph RD is a private company that operates in the energy markets, a trading company for commodities, especially oil products, supplying oil and petrochemical products, as well as providing technical and logistics services at the energy market. Creating, studying and identifying the best business opportunities for the fulfillment, success and efficient development of the international oil trade for our partners and clients. ',
      '• We supply petrochemical products. Our products range includes: Light crude, heavy crude, asphalt, gasoline, diesel, kerosene, gas and all derivatives. • We can also ship your products accordingly to the final destination of your choice. • We also can get insure for the shipment from the port of delivery to the discharge (final destination). • We are committed to provide to our customers and business partners high quality products and services through all intermediaries around the world.'
    ],
    images: [
      '',
      ''
    ]
  },
  article2: {
    title: 'Procurement',
    content: [
      'Carbonaph RD provides dedicated engineering services to companies in the energy and mining sector. Our OM provides clients with plant commissioning and start-up services, with teams of highly skilled engineers and consultants in a wide range of fields, including mining, oil and gas. Operational expertise is derived from the extensive experience on Kappa, Carbonaph RDs big sister, oil/gas and mining engineering services on numerous projects and operations worldwide. EM+ OMs knowledge bases are built on feedback methods and procedures. On global asset management contracts, our team provides full transfer of experience on start-up operations, maintenance/maintenance services and logistics; Our Company’s knowledge base is built on procedures, systems, teamwork know-how methods and strong international sourcing capabilities.',
      'Carbonaph R&D is a global player that has held close and trusting relations with its suppliers can provide support to its customers through the provision of dedicated procurement services. Our experience, in developing a worldwide Supply Chain Management Processes, has allowed being able to offer our services competitively worldwide. The oil and gas Procurement Management Team is in charge of sourcing new and old suppliers, buying, expediting, inspecting as well as organizing the shipping and logistics of the goods required. We constantly review and improve existing procedures and processes to improve competitiveness. Carbonaph RD oil Services takes upon themselves the general logistical responsibilities from departure sites to customer’s warehouse.'
    ],
    images: [
      '/images/article2-1.png',
      ''
    ]
  },
  article3: {
    title: 'Maintenance oil gas',
    content: [
      'Carbonaph R&D Services’ oil and gas Maintenance Management department has aim to be capable to manage any situations, in order to constantly keep the performances and safety of their customers assets at the required quality. Improving accessibility and efficiency is an integrated part of their service. With more than 20 years of experience, Carbonaph R&D Oil Services is specialized on the preparation of maintenance procedures and planning of preventive maintenance on oil and gas facilities. Working closely with their customers, they present strategies that significantly advance the organization of maintenance within any oil and gas project or operation. They implement strategic asset management and develop programs that improve availability and efficiency in order to increase their customers’ overall operating economy. Carbonaph´s Oil services believe maintenance´s is one of the main objectives that act to optimize production and helps to maintain the safety of their customers’ operations.',
      'Carbonaph R&D Oil Services’ aim is to :  • Reduce oil and gas Maintenance costs  • Improve Availability & Reliability on a Long Term basis  • Extend Service Life by prevention maintenance processes, within a compulsory schedule'
    ],
    images: [
      '/images/article3-1.png',
      '/images/article3-2.png'
    ]
  },
  article4: {
    title: 'Quality Health Safety Security Environment',
    content: [
      'QA/QC Carbonaph R&D Oil Services offers a wide variety of source inspection processes and assures the quality of all materials and equipment for: • Drilling production (onshore)• Transportation (pipelines, power station) • Refinery, Petrochemical • LNG plants The quality of all equipment, materials, structures and components is subject to strict regulations and standards. Carbonaph R&D Oil Services’ quality assurance and quality control services, help you ensure compliance with all contractual specifications, mandatory regulations and quality standards. Carbonaph R&D Oil Services Provides qualified and experienced Quality Assurance, Quality Control inspectors, to assure that equipment is delivered to schedule in a condition that is “Fit for Intended Use” and is fully compliant with applicable standards and regulations. One of their most important aims, is to help to Advance Quality Achievement and Performance Improvement throughout their customers organization.',
      'HSSE Health and safety is an important part of any industry, but in particular, in oil and gas industry: which is classed as very hazardous. Reducing the number of dangerous occurrences, injuries and hydrocarbon releases, remains a top priority.  Carbonaph R&D Oil Services aim is to provide their customers with the HSSE skills they need in order to achieve the maximum performances and reach the highest safety and environmental standards, throughout any project, operation and organization. The Safety of people, communities and the environment, takes priority on every project. Carbonaph R&D Oil Services interacts with its customers, by conducting HSSE analysis and studies, within their project, operation or organization. Once they have gathered sufficient information, two options are available: • HSSE manuals can be drafted and by consequence, submitted to the customer, for their internal use and training. • Training sessions can be organized by Carbonaph R&D Oil services, for their customers’ staff. Carbonaph R&D Oil Services helps meet HSSE compliance goals, by offering, around the world quality services, to assist with the development, execution and ongoing management of HSSE programs. This ensures the health, safety and Security of employees, as well as compliance with environmental regulations.'
    ],
    images: [
      '',
      ''
    ]
  },
  article5: {
    title: 'Skilled Manpower Supply',
    content: [
      'Carbonaph R&D Oil Services provides a Skilled Manpower Labor to the Oil & Gas industry, for upstream, midstream and downstream Projects and Operations, on a short or long-term basis.  Our highly qualified professionals and skilled labors can support the best top, middle and lower level workforce. ',
      'Carbonaph R&D oil Services, identifies the manpower requirements, in line with their customers’ needs, utilizing appropriate screening and matching methods to ensure that only suitably qualified personnel are recommended, in a timely fashion. They bring together the sourcers with oil and gas Companies who are in search of forwarding their operations, with a productive future in mind. With dependability and the suitability of Skilled Manpower Supply being key to operational continuity, Carbonaph R&D oil Services is a reliable partner, that customers can rely on to respond to their needs and to deliver a quality service. Throughout the period, during which Carbonaph R&D Oil Services’ staff works on customers’ operations, a full transfer of knowledge takes place, to local staff. By utilizing our skilled manpower supply to tackle our  customers’ ongoing and short-notice proficiency gaps, they provide assurance, that world-class knowledge and highly skilled labor, is enhancing the oil and gas industry.'
    ],
    images: [
      '/images/article5-1.png',
      '/images/article5-2.png'
    ]
  },
  article6: {
    title: 'Enhanced Oil Recovery',
    content: [
      'Enhanced Oil Recovery (EOR) is a generic term, for techniques designed for increasing the volume of Hydrocarbons that can be extracted from a field. Around one third of the oil in an average field remains underground because it is too costly to extract. If the oil is especially thick, the amount left behind can be much higher, especially when operating expenses are not covered with income (Wells in end of production). Now days, advanced technologies are making it economically feasible to produce the remaining oil at competitive prices. ',
      ' Carbonaph R&D designs, develops and provides enhanced oil recovery methods, which increase the effectiveness of oil recovery from a field. The first steps in the EOR Process, involves having good knowledge of the candidate field by conducting analysis and collecting data through a technical study prior to do anything. Thereafter, the aim is to propose and implement the best possible EOR´s method, which means extracting the greatest amount of hydrocarbons, while taking into consideration all factors from Environmental impacts, which are involved with this process, Carbonaph R&D Oil Services implements HSSE standards during each phase of the operation. '
    ],
    images: [
      '/images/article6-1.png',
      '/images/article6-2.png'
    ]
  },
};

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articlesData[id as string];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='bg-white text-black'>
    <ArticleDetail
      title={article.title}
      content={article.content}
      images={article.images}
    />
    </div>

  );
};

export default ArticlePage;