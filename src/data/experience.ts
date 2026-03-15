export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Mar 2025 – Jun 2025",
    title: "DevOps Intern",
    company: "Revancer",
    description:
      "Designed and operated scalable containerized microservices using Kubernetes, managing multi-node K3s clusters tailored for startup environments to maximize performance and resource efficiency. Automated the complete K3s cluster lifecycle through custom Shell scripting, covering provisioning, persistent volume setup, and cluster teardown—cutting environment setup time by over 70%. \n\n Strengthened platform security by hardening a private container registry with TLS encryption and Basic Authentication, and implemented NGINX Ingress Controllers to enable secure, domain-based traffic routing. Streamlined application configuration and deployments by managing sensitive data with ConfigMaps and Secrets, and building reusable Helm charts to standardize and accelerate application releases across environments.",
  },
];
