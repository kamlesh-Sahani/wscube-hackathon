import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Home() {
  const tasks = [
    {
      id: 1,
      title: "Java Quiz",
      description: "Complete the Java quiz to earn 50 points.",
      points: 50,
      progress: 30, // Progress in percentage
    },
    {
      id: 2,
      title: "JavaScript Challenge",
      description: "Solve the JavaScript coding challenge to earn 100 points.",
      points: 100,
      progress: 70,
    },
    {
      id: 3,
      title: "Python Project",
      description: "Build a Python project to earn 200 points.",
      points: 200,
      progress: 10,
    },
    {
      id: 4,
      title: "React Tutorial",
      description: "Complete the React tutorial to earn 150 points.",
      points: 150,
      progress: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Learn and Earn Points</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <Card key={task.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Points: {task.points}</span>
                  <span className="text-sm font-medium">{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="h-2" />
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Start Task
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}