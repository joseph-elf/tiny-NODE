


export default function ProjectCard({ title = "default" }) {
  return (
    <div className="p-6 border rounded-xl">
      <h3>{title}</h3>
    </div>
  );
}