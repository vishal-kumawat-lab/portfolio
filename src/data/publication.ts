export interface Publication {
  year: string;
  conference: string;
  title: string;
  // authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "Jan",
    title: "Cloud-Native Task Management System (DevSecOps Capstone)",
    // authors: "Jane Smith, Sarah Johnson, Yue Zhang",
    paperUrl: "https://github.com/vishal-kumawat-lab/Application-CI",
    codeUrl: "https://github.com/vishal-kumawat-lab/Application-CD",
    // bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: `Designed and implemented a CI/CD and GitOps-driven delivery pipeline using a dual-repository Jenkins architecture that separated application source code from Kubernetes manifests. Utilized Kustomize to enable fully declarative, version-controlled, and auditable Kubernetes deployments.

Hardened the DevSecOps pipeline by integrating SonarQube and Trivy, enforcing automated build failures for High and Critical vulnerabilities to ensure a zero-compromise production container registry. Optimized container performance by reducing Docker image sizes by 60% using multi-stage builds.

Provisioned and managed a high-availability AWS EKS cluster with self-healing workloads and zero-downtime rolling updates. Implemented Infrastructure as Code using Terraform to provision VPCs, subnets, IAM roles, and EKS resources with modular, environment-consistent configurations.

Integrated Prometheus and Grafana for observability, creating custom dashboards to monitor JVM metrics, request latency, and CPU/memory utilization across the Kubernetes cluster.`,

    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "",
    award: "",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "Dec 2025",
    conference: "",
    title: "Instagram Clone: Full-Stack Social Ecosystem",
    // authors: "Jane Smith, Sarah Johnson, Yue Zhang",
    // paperUrl: "https://arxiv.org/abs/2409.15476",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: `Designed and developed a full-stack social media platform using Java (Spring Boot) and MySQL, implementing JWT-based authentication, real-time messaging, and high-performance media feeds to support scalable user interactions. Built secure RESTful APIs optimized for concurrent access.

Deployed the application on AWS using Docker containerization, ensuring environment parity, scalability, and high availability across distributed cloud environments. Engineered a CI/CD pipeline that automated the entire application lifecycle—from unit testing to production deployment—eliminating manual intervention.

Architected and optimized a relational database schema to handle high-concurrency workloads, managing complex many-to-many relationships for user follows, real-time reels, and social engagement metrics such as likes, comments, and shares.`,

    imageUrl: "",
    award: "",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
