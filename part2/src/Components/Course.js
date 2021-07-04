/** @format */

const Course = ({ course }) => {
  const totalExercices = course.parts.reduce((sum, part) => {
    return (sum += part.exercises);
  }, 0);
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <h4>Total Number of Exercices: {totalExercices}</h4>
    </div>
  );
};

const Header = ({ courseName }) => <h2>{courseName}</h2>;

const Content = ({ parts }) => {
  return parts.map(part => <Part key={part.id} part={part} />);
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name}, {part.exercises} exercices
    </p>
  );
};

export default Course;
