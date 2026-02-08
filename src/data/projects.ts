export interface Project {
  id: string
  title: string
  description: string
  problem: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'robotic-arm',
    title: '6-DOF Robotic Arm Simulator',
    description: 'Full-stack web app simulating robotic arm with kinematics',
    problem: 'Built a complete simulator with forward/inverse kinematics, trajectory planning with 50 interpolated waypoints, and real-time visualization.',
    tech: ['Python', 'Flask', 'React.js', 'NumPy', 'SciPy'],
    liveUrl: 'https://robotic-arm-frontend-bcdr.onrender.com/',
    githubUrl: 'https://github.com/sumansrishti007/Robotic-Arm-Simulator',
    featured: true,
  },
  {
    id: 'auth-system',
    title: 'Enterprise Auth System',
    description: 'Full-stack authentication with MFA, JWT, and RBAC',
    problem: 'Built multi-factor authentication system with JWT tokens, OTP-based password recovery, and role-based access control for enterprise ETRM platform.',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'JWT', 'bcrypt'],
    featured: true,
  },
  {
    id: 'weapon-control',
    title: 'Remote Weapon Control System',
    description: 'IoT-based remotely operated system with live streaming',
    problem: 'Designed weapon control system with 360° servo control, Python GUI, and ESP32 live-streaming module for remote operation and monitoring.',
    tech: ['Arduino', 'ESP32', 'Python', 'Servo Motors', 'IoT'],
    featured: true,
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'Responsive web app to track daily habits',
    problem: 'Built a clean habit tracking app with motivational quotes to help users build consistent daily routines.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://fancy-gaufre-4c2f99.netlify.app/',
  },
  {
    id: 'areev-stories',
    title: 'Areev Stories',
    description: 'Frontend website for storytelling platform',
    problem: 'Designed and built a content platform concept for storytelling with clean UI and smooth user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://areevstories.netlify.app/',
  },
  {
    id: 'optimization',
    title: 'Nature-Inspired Optimization Analysis',
    description: 'Performance analysis of optimization algorithms',
    problem: 'Analyzed Genetic Algorithm, Gold-Rush Optimization, and Energy Valley Optimizer on Quanser Aero system with Fractional Order PID controllers.',
    tech: ['MATLAB', 'PID Controllers', 'Simulink'],
  },
]