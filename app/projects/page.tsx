import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          title="Supplier Compliance Platform"
          problem="New EU rules required traceable supplier data for 25k+ vendors; manual workflows were slow and error-prone."
          solution="Designed RESTful APIs for upload/edit/delete with real-time reporting; centralized records in PostgreSQL + S3 (Spring Boot)."
          result="MVP delivered in 18 weeks; manual effort reduced by ~70%; enabled seamless external client integrations."
          stack={["Java", "Spring Boot", "PostgreSQL", "AWS S3", "Docker"]}
        />
        <ProjectCard
          title="CNN Weather Classifier"
          problem="Needed a robust model to predict five weather conditions from images."
          solution="Built an ensemble (VGG16/19, ResNet50, DenseNet201) with OpenCV EDA and TensorFlow training."
          result="83% test accuracy; ranked 5/100+ teams in a university challenge."
          stack={["TensorFlow", "OpenCV", "Python"]}
          repo="https://github.com/your-github/weather-cnn"
        />
        <ProjectCard
          title="Pairs Trading Backtester"
          problem="Identify statistically related stock pairs for market-neutral gains."
          solution="Implemented mean-reversion signals using MA, EWMA, Bollinger Bands, and RSI; backtested on 5 years of Indian market data."
          result="Average profit 5–10% on historical test windows (for research only)."
          stack={["Python", "Pandas", "Matplotlib"]}
          repo="https://github.com/your-github/pairs-trading"
        />
      </div>
    </Section>
  );
}