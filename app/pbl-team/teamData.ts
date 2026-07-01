export type BioBlock = string | { list: string[] };

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: BioBlock[];
}

export const managementTeam: TeamMember[] = [
  {
    slug: "robert-pestka",
    name: "Robert Pestka",
    role: "Chief Executive Officer",
    photo: "robert-pestka.jpg",
    bio: [
      "Mr. Pestka has led PBL for more than three decades, transforming a $30,000 startup into a globally recognized provider of high-quality interferon and cytokine reagents, immunoassays, and bioanalytical services. Building on the company’s origins in pioneering interferon research, he translated a foundational scientific legacy into a scalable platform supporting drug development and biomedical research worldwide.",
      "Under his leadership, PBL introduced many first-to-market reagents and immunoassay kits. He established the company’s global commercial infrastructure, ensuring broad access to reliable, high-performance assay solutions now widely cited and trusted across the life sciences industry.",
      "Mr. Pestka leveraged PBL's depth of experience developing and running immunoassays to spearhead the company's expansion into bioanalytical CRO services. In this capacity, PBL now provides rigorous, cost-effective biomarker testing in support of translational and clinical drug development programs for pharmaceutical and biotechnology company partners.",
      "He has secured millions in state and federal funding to support innovation in interferon biology and is known for fostering a culture of scientific rigor, quality, and collaboration. Prior to joining PBL, Mr. Pestka held project management and architectural design roles at Kajima International. He earned a B.S. in Architecture and Civil Engineering from Princeton University.",
    ],
  },
  {
    slug: "rick-nichols",
    name: "Rick Nichols",
    role: "Chief Revenue Officer",
    photo: "rick-nichols.jpg",
    bio: [
      "Mr. Nichols has a successful track record of growing technology companies, from pre-revenue startups and scale-ups to establish company transformations and turnarounds. His experience as a senior technology executive and transformation consultant gives him a unique understanding of what is required to enable companies to accelerate and drive significant performance improvement. His strong communication and leadership skills have enabled Mr. Nichols to establish productive client relationships and build strong, motivated sales and marketing teams.",
      "Mr. Nichols' corporate operating and consulting experience includes significant achievements in all aspects of revenue growth, including:",
      { list: ["marketing, sales, business development, partnerships and customer success leadership", "go to market strategy, omni-channel revenue growth leadership and execution, pipeline and forecast management", "customer growth and retention management", "brand development and positioning"] },
      "Mr. Nichols holds a BS degree in Industrial Management from Georgia Institute of Technology.",
    ],
  },
  {
    slug: "lori-parro",
    name: "Lori Parro, CPA, MBA",
    role: "Chief Financial Officer",
    photo: "lori-parro.jpg",
    bio: [
      "Ms. Parro has served as the lead finance executive for a number of life sciences, pharmaceutical, drug development, medical device, and contract research companies over the course of her 30-year career. Many of her client companies have been long-term engagements in which she has overseen financial, tax, cash management, budgetary and audit aspects of the business.",
      "Ms. Parro has extensive expertise in startup incorporation, corporate funding, IP licensing and transfer, business planning, and growth management. She has dealt with government accounting, compliance issues around Federal contracts and SBIR/STTR grants. Recently, Ms. Parro successfully led the exit of the $220M acquisition by Stryker of HyperBranch Medical Technology, a VC-backed company she helped grow over 12 years. She has a bachelor's degree in Accounting and Finance from North Carolina State University and received an MBA from NC State Poole College of Management.",
    ],
  },
  {
    slug: "alok-pandey",
    name: "Alok Pandey, Ph.D.",
    role: "Chief Scientific Officer",
    photo: "alok-pandey.jpg",
    bio: [
      "Dr. Pandey serves as Chief Scientific Officer at PBL Assay Science, where he leads the company’s scientific vision and biomarker strategy in support of translational and clinical drug development programs for pharmaceutical and biotechnology partners. With more than twenty years of experience in protein biochemistry and biomarker research, he has played a key role in advancing the integration of biomarkers into therapeutic development.",
      "Dr. Pandey oversees biomarker programs from discovery through clinical application, working closely with partners to enable informed decision-making. His expertise includes translational biomarker strategy, bioanalytical science, and advanced immunoassay technologies for reliable biomarker measurement in complex biological systems. Under his leadership, PBL has strengthened its scientific capabilities and expanded its role as a trusted biomarker partner across global therapeutic programs.",
      "Prior to his current role, Dr. Pandey led PBL’s bioanalytical services division and developed companion diagnostic immunoassays from concept through market entry at Enzo Life Sciences. His postdoctoral research at Rutgers University focused on drug discovery for rare diseases, reflecting his longstanding commitment to advancing biomedical science. Dr. Pandey has authored more than 50 scientific publications and remains actively engaged in advancing biomarker science and its application in translational research and therapeutic development.",
    ],
  },
  {
    slug: "william-clark",
    name: "William A. Clark, Ph.D.",
    role: "Vice President, Science and Strategic Alliances",
    photo: "william-clark.jpg",
    bio: [
      "Dr. Clark directs and negotiates research, collaborative, alliance, service, and consulting arrangements with pharmaceutical and biotechnology companies, universities, and government laboratories. He also oversees out- and in-licensing of reagents and technologies to and from partner laboratories across the globe, and directs PBL's intellectual property and business development efforts.",
      "Dr. Clark joined PBL as Section Head of Protein Biochemistry where he led a team of scientists in the purification of recombinant novel and native interferons and monoclonal antibodies for preclinical development, research use, and commercial sale. Subsequently as Director of Drug Discovery and Development he directed protein biochemistry, genetic engineering, and drug delivery teams to advance the preclinical development of novel interferon-based therapeutics and achieve Small Business Innovation Research grant goals.",
      "Dr. Clark received his Bachelor of Science in chemistry from Boston College and enjoyed several years developing new consumer products at Lehn & Fink Products Corp., a division of Sterling Drug. He holds a Master of Philosophy and Ph.D. in pharmacology from Yale University where he specialized in in vivo. neuropharmacology supported, in part, through a competitive predoctoral NRSA fellowship. Dr. Clark completed postdoctoral training in signal transduction/reconstitution of purified G proteins and GPCRs under two awards, a competitive NIGMS PRAT fellowship and an NIH IRTA fellowship, both at the National Institutes of Health where he later accepted a Staff Scientist position.",
    ],
  },
  {
    slug: "hong-gee-lee",
    name: "Hong-Gee Lee, Ph.D.",
    role: "Director, Marketing & Product Management",
    photo: "hong-gee-lee.jpg",
    bio: [
      "Dr. Lee leads the company’s marketing efforts, including campaign planning and execution, content creation and management, and digital marketing strategies, ensuring these initiatives align with overall business objectives. He also oversees product support, working closely with the Quality, Manufacturing, and Product Development teams to deliver exceptional customer service and drive continuous product improvement.",
      "Dr. Lee earned a Bachelor of Science and Ph.D. in Biochemistry from Polytechnic University in New York (now NYU) and conducted post-doctoral research at Sloan-Kettering Institute, where he studied murine embryonic development. Before joining PBL, he was an Application Scientist in the Sample Preparation Division of ThermoFisher, providing application support to both academic and industry scientists.",
    ],
  },
  {
    slug: "daniela-rotaru",
    name: "Daniela Rotaru",
    role: "Managing Director, Products Division",
    photo: "daniela-rotaru.jpg",
    bio: [
      "Ms. Rotaru oversees day-to-day financial, operations, and administrative functions of the Kits & Reagents business, with the goal of delivering quality products on time. She supports short- and long-term strategic and financial planning to ensure the continuing profitability of the Products business line. Ms. Rotaru manages the Manufacturing, Protein Science, and Facilities departments and provides financial and operational guidance to the Quality department.",
      "Ms. Rotaru has been an integral part of the company for 17 years, since she began at PBL as Laboratory Assistant. Since that time, she has been promoted 6 times: first to Production Technician, then to Senior Production Technician, then to Quality Scientist, then to Production Supervisor, then to Manufacturing Director, and then to her current position as Managing Director, Products Division. Her varied roles have given her good perspective on the business. In each of her management roles, she has consistently demonstrated the ability to assemble top-notch teams dedicated to fulfilling the company’s mission.",
      "Ms. Rotaru has 15 years of experience working in various accounting and finance positions for Lux-Artim SRL, a manufacturer of household and industrial furniture based in Romania, where her responsibilities included financial planning, inventory management, cash flow management, sales analysis, and financial reporting. After studying Bookkeeping and Administrative law at a magnet high school in Romania, Ms. Rotaru received a Bachelor’s degree in Management and Marketing from the University of Craiova and certification as a Chartered Accountant in Accounting, Finance, and Economics.",
    ],
  },
  {
    slug: "mike-skawinski",
    name: "Mike Skawinski",
    role: "Scientific Advisor",
    photo: "mike-skawinski.jpg",
    bio: [
      "Mr. Skawinski provides scientific input and guidance to Assay Services and Manufacturing staff, and has direct reporting responsibility for the company’s Quality department. He in intimately familiar with the science and technology employed by PBL, having genetically engineered, produced, and purified proteins and antibodies in microbial and human-cell expression systems; and developed and executed cell-based assays and immunoassays on single-analyte and multiplex platforms.",
      "Mr. Skawinski began as an intern in genetic engineering and protein biochemistry at PBL while pursuing an undergraduate degree in Biochemistry at Rutgers University. He has been promoted 7 times over 24 years and has occupied positions including Protein Science Group Leader; Director, Product Development; and Chief Operations Officer.",
    ],
  },
  {
    slug: "karen-zipf",
    name: "Karen Zipf, MS",
    role: "Director, Quality",
    photo: "karen-zipf.jpg",
    bio: [
      "Ms. Zipf has developed and implemented a fully documented quality control system governing the performance of assay services and the manufacture of research products such as recombinant proteins, antibodies and ELISA kits. She ensures compliance with established standards, customer needs, and company goals not only in the assay services area and manufacturing process, but also with regard to order fulfillment, facilities, and IT. Ms. Zipf joined PBL in the position of Quality Manager.",
      "Prior to her work with PBL, Ms. Zipf was a Scientist and then Senior Scientist at Roche Pharmaceuticals, where she developed fluorescent dye and antibody-based HCS assays and profiled compound cytotoxicity using HCS and luminescence assays in HepG2 cells. She received dual Bachelor’s degrees in Biochemistry and Anthropology from Rutgers University, and a Master’s degree in Biology from William Paterson University.",
    ],
  },
  {
    slug: "jonathan-ferreira",
    name: "Jonathan Ferreira",
    role: "Director, Project Management",
    photo: "jonathan-ferreira.jpg",
    bio: [
      "Mr. Ferreira is Director of Project Management at PBL, where he oversees client-facing projects within the Assay Services division and ensures coordination across scientific, operational, and business teams. With over 13 years of experience, he brings deep expertise in protein purification, assay development, and laboratory operations. He began his career at PBL as Quality Control Scientist and advanced through roles in protein science and operations leadership, including Director of Operations, Protein Science and Assay Services. Mr. Ferreira has led initiatives to streamline immunoassay workflows, custom built project management systems, and improved cross-functional efficiencies.",
      "Mr. Ferreira holds a B.S. in Biological and Environment Engineering with a minor in Biomedical Engineering from Cornell University. Known for his personal, systems-oriented approach, he combines technical depth with a strong focus on execution to help clients bring scientific breakthroughs to life.",
    ],
  },
  {
    slug: "thomas-lavoie",
    name: "Thomas B. Lavoie, Ph.D.",
    role: "Biomarker Consultant",
    photo: "thomas-lavoie.jpg",
    bio: [
      "Dr. Lavoie presently serves PBL in a consulting capacity following his retirement as Chief Scientific Officer after 20 years at the company. During his time as PBL, his emphasis on Quality helped establish the company’s reputation as a supplier of reliable, high-quality products and services. Insights from his experience developing immunoassays and providing biomarkers services to clients have helped expedite many biomarkers and drug development programs.",
      "Upon joining PBL as Section Head, Protein Biochemistry, Dr. Lavoie supported the company’s Kits & Reagents business through the purification and characterization of interferons and monoclonal antibodies. He also developed purification schemes and cell-based assays aimed at developing more potent/selective interferons as therapeutic agents.",
    ],
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    slug: "faranhaz-forozan",
    name: "Faranhaz Forozan, Ph.D., MB(ASCP)",
    role: "Scientific Advisory Board Member",
    photo: "farahnaz-forozan.jpg",
    bio: [
      "Dr. Farahnaz Forozan has applied her technical, regulatory, clinical operation, and diagnostics expertise in oncology, immuno-oncology, neurology, and microbiomes in roles at Cedar-Sinai Medical Center, Genzume, LabCorp/Covance, and Bristol Myers Squibb. She has consulted with venture capital firms, angel investors, private equity, consulting firms, hospitals, biotech and pharma companies, research academic centers, and CROs.",
      "In the course of providing strategy, diligence, market analysis, and scientific intelligence, Dr. Forozan has contributed to complex R&D projects, early-stage, pre-clinical, and clinical stage trials; the assessment of new platforms and technologies; drug discovery, drug development, biomarker identification and development; and assay development. She has also built out translational, diagnostic, and prognostic labs; developed regulatory strategy; and delivered on preclinical & clinical pipeline from discovery through launch.",
      "Dr. Forozan has collaborated with companies including Illumina, DAKO, Agilent, Ventana, Leica, Qiagen, NanoString, and Abbott in implementing global, multisite, companion and in vitro diagnostics and device studies in the U.S. as well as China, the EU, and Australia, with direct contributions to regulatory authorities including FDA, cFDA, EMA, and TGA. She contributed to the development, approval, and post-marketing support of more than 15 marketed products and over 30 global programs in various stages of clinical development.",
      "Dr. Forozan received her Ph.D. in 2000 with a degree in Genetics through a joint program between The George Washington University and the National Institutes of Health. She received her B.S. in Biology/Genetic engineering from California State University, Los Angeles. She is a Clinical Ph.D. and licensed Clinical Genetic Molecular Biologist Scientist in the State of California.",
    ],
  },
  {
    slug: "michael-howell",
    name: "Michael D. Howell, Ph.D.",
    role: "Scientific Advisory Board Member",
    photo: "michael-howell.jpg",
    bio: [
      "Dr. Michael Howell is a Co-Founder of Galileo Biosystems and scientific advisor to several startup biotech companies. Prior to Galileo, Dr. Howell was a faculty member at National Jewish Health and held roles of increasing responsibility at Boehringer Ingelheim, Immune Tolerance Network, MedImmune/AstraZeneca, Incyte Corporation and, most recently, DermTech. Throughout his career, he has led research and development teams dedicated to the discovery of novel therapies and the integration of precision and personalized medicine approaches to clinical development. His efforts have led to the approval of multiple therapies including Opzelura (ruxolitinib), Jakafi (ruxolitinib), Adbry/Adtralza (tralokinumab), Tezpire (tezepelumab), Skyrizi (rizankizumab), and Spevigo (spesolimab), and to other novel diagnostic approaches to patient treatment that have been highlighted in more than 60 publications and numerous patents. Dr. Howell received his Ph.D. in immunology from West Virginia University School of Medicine and completed his post-doctoral training at National Jewish Health.",
    ],
  },
  {
    slug: "ilia-ichetovkin",
    name: "Ilia Ichetovkin, Ph.D.",
    role: "Scientific Advisory Board Member",
    photo: "ilia-ichetovkin.jpg",
    bio: [
      "Dr. Ilia Ichetovkin is an expert medical scientist with over 20 years' experience translating biomarker research into diagnostic practice. He has an accomplished career spanning pharmaceutical, CRO, and diagnostic companies, leading teams behind the successful development and launch of multiple high impact IVD, CE IVD, LDT and CDx products.",
      "In his most recent roles at Rhythm Pharmaceuticals, Denovo Biopharma, Travere, and Celgene/Abraxis, Dr. Ichetovkin focused on developing companion and complimentary diagnostic strategies. He has previously worked on clinical trial design, molecular assay development, laboratory operations and scientific affairs at LabCorp Clinical Trials, Sera Prognostics, Vela Diagnostics, and Ikonisys.",
      "Dr. Ichetovkin received a Ph.D. in Biomedical Sciences from Albert Einstein College of Medicine and a Master's degree in Chemistry from M.V. Lomonosov Moscow State University.",
    ],
  },
  {
    slug: "terence-ryan",
    name: "Terence Ryan, Ph.D.",
    role: "Scientific Advisory Board Member",
    photo: "terence-ryan.jpg",
    bio: [
      "Dr. Terence Ryan has been a research manager and executive with both biotechnology and large pharma companies, and has worked across multiple therapeutics areas. Originally trained as a virologist, he has led recombinant protein expression efforts at Regeneron and as Chief Scientific Officer at iBio, inc.. Dr. Ryan has also led multidisciplinary teams integrating \"omics\" platforms and machine learning to identify predictive biomarkers, drug targets, and new mechanisms of drug action while at Celera Genomics, GlaxoSmithKline, and Wyeth Pharmaceuticals (now Pfizer). He holds an AB in Biology from Princeton University and a Ph.D. in Microbiology from Rutgers University/UMDNJ Robert Wood Johnson School of Medicine.",
    ],
  },
];

export const founders: TeamMember[] = [
  {
    slug: "joan-pestka",
    name: "Joan Pestka",
    role: "Founder & Executive Manager",
    photo: "joan-pestka.jpg",
    bio: [
      "Joan Pestka co-founded PBL Assay Science in 1990 alongside her husband, Dr. Sidney Pestka. From the very beginning, Joan played an essential and hands-on role in building the company. While Dr. Pestka maintained his full-time academic responsibilities, she single-handedly managed every aspect of daily operations. Her responsibilities spanned purchasing, accounting, and collections; payroll, insurance, and employee benefits; human resources; product preparation, shipping, and receiving; as well as sales, customer service, and technical support.",
      "Her dedication and guidance during these formative years laid the foundation for PBL’s values and long-term success. As the company grew and her son Robert Pestka joined the team a few years later, Ms. Pestka was gradually able to delegate many of these duties, allowing her to guide the business through its next stages of development.",
      "Prior to founding PBL, Ms. Pestka taught high school mathematics and held research and administrative roles in the psychology departments of the University of Pennsylvania, American University, and George Washington University. She holds a Master of Arts in Counseling Psychology from American University and a Bachelor of Arts in Mathematics from the University of Michigan, with minors in Psychology and Physics & Chemistry.",
    ],
  },
  {
    slug: "sidney-pestka",
    name: "Sidney Pestka, M.D.",
    role: "Founder & Chairman Emeritus (In memoriam, 1936 – 2016)",
    photo: "sidney-pestka.jpg",
    bio: [
      "On December 22, 2016, PBL Assay Science lost one of our company's founders Dr. SIdney Pestka.",
      "In 1990, Dr. Pestka founded PBL Assay Science with his wife, Joan, to develop cytokine assays and reagents and to expand interferon’s clinical utility in cancer and viral diseases. Today the company has expanded to 35 employees and supplies high-quality products and services to researchers around the world.",
      "Dr. Pestka was much more than just one of the founders of PBL. He was known as the \"Father of Interferon\" for his seminal work on interferon, work that gave birth to a multi-billion dollar market directed at the therapy of hepatitis, multiple sclerosis, cancer, and other diseases that affect mankind. The interferon field owes much to Sidney Pestka - it would not be what it is today without his contributions. For example, Sid was the first to purify interferon alpha and beta; the first to clone mature interferons; and the first to develop a commercialized recombinant biotherapeutic—Roferon A. In the process, he developed reverse phase high-performance liquid chromatography (RP-HPLC) for protein purification.",
      "Sid graduated summa cum laude in chemistry (1957) from Princeton University and received his doctorate in medicine (1961) from the University of Pennsylvania School of Medicine. He went on to work at the National Institutes of Health (NIH) in the laboratory of Dr. Marshall W. Nirenberg. Sid’s early work on the genetic code, protein synthesis and ribosome function led to Nirenberg’s 1968 Nobel Prize in Physiology or Medicine.",
      "In 1966, Sid moved to the NIH’s National Cancer Institute to concentrate his research on protein synthesis. Three years later, he left the NIH for the Roche Institute of Molecular Biology, where he focused on defining how antibiotics work and proteins are synthesized and, later, interferons.",
      "Sid was also Emeritus Professor of the Department of Biochemistry and Molecular Biology at Robert Wood Johnson Medical School of Rutgers, The State University of New Jersey, which he joined in 1986 and where he served as Chairman for 25 years. Sid’s research focused on interferons and cytokines; receptors and signal transduction; immunotherapy of cancer; and prevention, treatment and control of cancers and viral diseases.",
      "Sid is named inventor on 270 U.S. and foreign patents and has 665 publications and abstracts in his name. Many of the inventions described in these patents have broad applications in the biotechnology and pharmaceutical industries. He has edited five books related to protein biosynthesis and interferons-several of which are classics and still frequently cited today. He holds an honorary doctorate in science from Rider University (1987) and has played an important role at the International Cytokine and Interferon Society (ICIS), where he served as secretary, vice president, and president.",
      "Sid was a rigorous and demanding scientist, a generous colleague and collaborator, and a successful and caring mentor. He trained many scientists over his 42 years leading research efforts at the Roche Institute of Molecular Biology and at Robert Wood Johnson Medical School. Some of these individuals became world-famous scientists in their own right; some went off to run their own companies in countries spanning the globe; some became effective teachers and mentors themselves. But all of those whom Sid trained benefitted from his insistence on building knowledge upon firm logical evidence.",
      "While Sid could certainly come across as intimidating—particularly if he was questioning scientific methods—he was generous in sharing credit for scientific advances, even holding up his own publications to permit others to publish on the same topic at the same time. His primary focus was not on beating out perceived competitors, but in sharing credit and in ensuring fellow researchers were shown the most complete picture of developments in the field.",
      "Sid was a warm, caring, good-humored man. He had a face that was often mistaken for Woody Allen’s, a contagious smile, a true love of laughter, and a great appreciation of the art of telling a good, clean joke. He also had a poetic side and a thoughtful and elegant way with the written word, almost exclusively using an old-fashioned fountain pen filled with his signature turquoise ink. The quintessential scientist since adolescence, he had been afflicted with dementia for the last few years of his life. During these last few years, his mantra “keep it going” directed everyone with whom he interacted to make the most of every day and do the best in everything you do. We will miss him.",
      "\"Everyone can work eight hours a day and sleep eight hours a day. It's what you do with the other eight hours that can change the course of your life.\"",
      "-Sidney Pestka, M.D.",
      "Selected Honors and Awards:",
      { list: ["2001 National Medal of Technology, received from President George W. Bush, for \"Pioneering achievements that led to the development of the biotechnology industry, to the first recombinant interferons, and for basic scientific discoveries in chemistry, biochemistry, genetic engineering and molecular biology\"", "2001 Seymour & Vivian Milstein Award for Excellence in Interferon & Cytokine Research", "2004 Warren Alpert Foundation prize from Harvard Medical School", "2006 Lemelson-MIT Lifetime Achievement Award", "2009 Molecular Biology Medal from National Institute of Health for his role in deciphering the genetic code and the mechanism of protein synthesis", "2010 Edward J. Ill Outstanding Medical Research Scientist Award for Basic Biomedical Research", "Induction into the New Jersey High Tech Hall of Fame and New Jersey Inventors' Hall of Fame"] },
      "Selected Publications:",
      { list: ["Nirenberg, M.W., et al. (1963) \"On the Coding of Genetic Information,\" Cold Spring Harbor Symp. Quant. Biol. 28, 549-557.", "Pestka, S., et al. (1965) \"RNA Codewords and Protein Synthesis. V. Effect of Streptomycin on the Formation of Ribosome-sRNA Complexes,\" Proc. Natl. Acad. Sci. U.S.A. 53, 639-646.", "Pestka, S. and Brot, N. (1971) \"Studies on the Formation of Transfer Ribonucleic Acid-Ribosome Complexes. XV. Effect of Antibiotics on Steps of Bacterial Protein Synthesis: Some New Ribosomal Inhibitors of Translocation,\" J. Biol. Chem. 246, 7715-7722.", "Pestka, S., et al. (1975) \"Cell-free Synthesis of Human Interferon,\" Proc. Natl. Acad. Sci. U.S.A. 72, 3898-390l.", "Cavalieri, R.L., et al. (1977) \"Synthesis of Human Interferon by Xenopus laevis Oocytes: Two Structural Genes for Interferons in Human Cells,\" Proc. Natl. Acad. Sci. U.S.A. 74, 3287-3291.", "Rubinstein, M., et al. (1978) \"Human Leukocyte Interferon Purified to Homogeneity,\" Science 202, 1289-1290.", "Fisher, P.B., et al. (1979) \"Tumor Promoter and Interferon Synergistically Delay the Expression of Melanogenesis in B-16 Melanoma Cells,\" J. Cell Biol. 83, 33a. (Abstract. CD153)", "Gutterman, J.U., et al. (1980) \"Leukocyte Interferon-Induced Tumor Regression in Human Metastatic Breast Cancer, Multiple Myeloma, and Malignant Lymphoma,\" Ann. Intern. Med. 93, 399-406.", "Goeddel, D.V., et al. (1980) \"Human Leukocyte Interferon Produced by E. coli is Biologically Active,\" Nature 287, 411-416.", "Herberman, R.B., et al. (1980) \"Role of Interferon in Regulation of Cytotoxicity by Natural Killer Cells and Macrophages,\" Ann. N.Y. Acad. Sci. 350, 63-71.", "Friesen, H.-J., et al. (1981) \"Purification and Molecular Characterization of Human Fibroblast Interferon,\" Arch. Biochem. Biophys. 206, 432-450.", "Familletti., et al. (1981) \"A Convenient and Rapid Cytopathic Effect Inhibition Assay for Interferon,\" in Methods in Enzymology, Vol. 78 (S. Pestka, ed.), Academic Press, New York, 387-394.", "Rubinstein, M. and Pestka, S. (1981) \"Purification and Characterization of Human Leukocyte Interferons by High Performance Liquid Chromatography,\" in Methods in Enzymology, Vol. 78 (S. Pestka, ed.), Academic Press, New York, 464-472.", "Staehelin, T., et al. (1981) \"A Rapid Quantitative Assay of High Sensitivity for Human Leukocyte Interferon with Monoclonal Antibodies,\" in Methods in Enzymology, Vol. 79 (S. Pestka, ed.), Academic Press, New York, 589-595.", "Rubinstein, M., et al. (1981) \"Human Leukocyte Interferon: Isolation and Characterization of Several Molecular Forms,\" Arch. Biochem. Biophys. 210, 307-318.", "Greiner, J., et al. (1984) \"Detection and Enhancement (by Recombinant Interferon) of Carcinoma Cell Surface Antigens Using Monoclonal Antibodies,\" in Cancer Cells. 1/The Transformed Phenotype (A.J. Levin, G.F. Vande Woude, W.C. Pott, and J.D. Watson, eds.), Cold Spring Harbor Press, Cold Spring Harbor, New York, Vol. II, 285-291.", "Fisher, P.B., et al. (1985) \"Effects of Combined Treatment with Interferon and Mezerein on Melanogenesis and Growth in Human Melanoma Cells,\" J. Interferon Res. 5, 11-22.", "Langer, J.A., and Pestka, S. (1985) \"Structure of Interferons,\" Pharmacol. Ther. 27, 371-401.", "Rashidbaigi, A., et al. (1985) \"Characterization of Receptors for Immune Interferon in U937 Cells with 32P-Labeled Human Recombinant Immune Interferon,\" J. Biol. Chem. 260, 8514-8519.", "Pestka, S., and Tarnowski, S.J. (1985) \"Purification of the Interferons,\" Pharmac. Ther. 29, 299-319.", "Greiner, J.W., et al. (1986) \"Differential Effects of Recombinant Human Leukocyte Interferons on Cell Surface Antigen Expression,\" Cancer Res. 46, 4984-4990.", "Flores, I., et al. (1991) \"Human Interferon Omega (ω) Binds to the α/β Receptor,\" J. Biol. Chem. 266, 19875-19877.", "Sperber, S.J., et al. (1992) \"Anti-HIV-1 Activity of Recombinant and Hybrid Species of Interferon Alpha,\" J. Interferon Res. 12, 363-368.", "Soh, J., et al. (1994) \"Identification and Sequence of an Accessory Factor Required for Activation of the Human Interferon Gamma Receptor,\" Cell 76, 793-802.", "Cleary, C.M., et al. (1994) \"Knockout and Reconstitution of a Functional Human Type I Interferon Receptor Complex,\" J. Biol. Chem. 269, 18747-18749.", "Ozzello, L., et al. (1995) \"Up-regulation of a Tumor-associated Antigen (TAG-72) by Interferons Alpha and Gamma in Patients with Cutaneous Breast Cancer Recurrences,\" Intl. J. Oncology 6, 985-991.", "Sarkar, S., et al. (1995) \"Injection of Irradiated B16 Melanoma Genetically Modified to Secrete IFN-α Causes Regression of an Established Tumor,\" Intl. J. Oncology 7, 17-24.", "Pestka, S. and Meager, A. (1997) \"Interferon Standardization and Designations,\" J. Interferon and Cytokine Res. 17, Supplement 1, S9-S14.", "Kotenko, S.V., et al. (1997) \"Identification and Functional Characterization of a Second Chain of the Interleukin-10 Receptor Complex,\" EMBO J. 16, 5894-5903.", "Kotenko, S.V., et al. (2001) “Identification of the Functional IL-TIF (IL-22) Receptor Complex: the IL-10R2 Chain (IL-10Rβ) is a Common Chain of Both IL-10 and IL-TIF (IL-22) Receptor Complexes,” J. Biol. Chem. 276, 2725-2732.", "Krause, C.D., and Pestka, S. (2006) “Primate interferon-alpha species and the origin and evolution of human interferon-alphas,” Eur. Cytokine Network 17: 68. (Abstract 05-29/O)", "Lavoie, T.B., et al. (2011) “Binding and activity of all human alpha interferon subtypes,” Cytokine, 56(2): 282-289.", "Krause, C.D., et al. (2013) “Improving the spectral analysis of fluorescence resonance energy transfer in live cells: Application to interferon receptors and Janus kinases,” Cytokine 64(1): 272-285."] },
    ],
  },
];
