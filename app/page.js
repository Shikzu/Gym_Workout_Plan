'use client';

import React, { useState } from 'react';
import { Play, Pause, ChevronRight, ChevronLeft, Info, Dumbbell, Clock, Activity, CheckCircle, RotateCcw, ExternalLink, ArrowRightLeft, Home, Youtube, Smartphone, Flame } from 'lucide-react';

export default function GymSimulator() {
  const [activeTab, setActiveTab] = useState('day1');
  const [simulatorMode, setSimulatorMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Data tailored to user's specific Life Fitness equipment images + free weights
  // Updated with educational/embed-friendly Video IDs and Alternate Free Weight exercises with their own videos
  const workoutPlan = {
    day1: {
      title: "Day 1: Chest & Triceps",
      focus: "Push Strength",
      description: "Combining chest and triceps allows you to fully exhaust the pushing muscles in one session.",
      exercises: [
        {
          name: "Machine Chest Press",
          equipment: "Life Fitness Chest Press Station",
          sets: "3",
          reps: "10-12",
          videoId: "n8TOta_pfr4", // Livestrong
          tips: [
            "Adjust seat so handles are at mid-chest level.",
            "Keep your back flat against the pad; do not arch excessively.",
            "Exhale as you push forward, inhale as you return slowly.",
            "Don't lock your elbows at the full extension."
          ],
          mindMuscle: "Focus on squeezing your chest muscles together at the peak of the push.",
          type: "machine",
          alternate: {
            name: "Dumbbell Bench Press",
            equipment: "Flat Bench + Dumbbells",
            guide: "Lie on bench, press dumbbells up from chest level. Bring them together at the top without clicking them.",
            videoId: "X3YrlBmjWrY"
          }
        },
        {
          name: "Dumbbell Bench Press",
          equipment: "Flat Bench + Dumbbells",
          sets: "3",
          reps: "10-12",
          videoId: "X3YrlBmjWrY",
          tips: [
            "Lie flat on the bench with feet firm on the ground.",
            "Lower dumbbells to mid-chest level.",
            "Press up and slightly in, but don't clang weights together."
          ],
          mindMuscle: "Feel the stretch at the bottom and the contraction at the top.",
          type: "free_weight",
          alternate: {
            name: "Pushups",
            equipment: "Bodyweight",
            guide: "Standard pushups. Keep core tight and back straight.",
            videoId: "IODxDxX7oi4"
          }
        },
        {
          name: "Pectoral Fly",
          equipment: "Life Fitness Fly/Rear Delt Machine",
          sets: "3",
          reps: "12-15",
          videoId: "9Gx2LF48rRA", // Vanderbilt Rec Center
          tips: [
            "Adjust arms to the 'Fly' setting (handles forward).",
            "Keep a slight bend in your elbows throughout the movement.",
            "Bring handles together in a hugging motion."
          ],
          mindMuscle: "Visualize hugging a large tree barrel.",
          type: "machine",
          alternate: {
            name: "Dumbbell Chest Flys",
            equipment: "Flat Bench + Dumbbells",
            guide: "Lie on bench. Open arms wide with slight bend in elbows, then bring dumbbells together over chest.",
            videoId: "eozdVDA78K0"
          }
        },
        {
          name: "Overhead Tricep Extension",
          equipment: "Dumbbell",
          sets: "3",
          reps: "12-15",
          videoId: "b_r_LW4HEcM",
          tips: [
            "Hold one dumbbell with both hands above your head.",
            "Lower the weight behind your head by bending elbows.",
            "Keep elbows pointing forward, not flaring out."
          ],
          mindMuscle: "Feel the stretch in the back of your arm.",
          type: "free_weight",
          alternate: {
            name: "Tricep Bench Dips",
            equipment: "Bench",
            guide: "Hands on bench behind you, legs straight out. Lower hips towards floor and push back up.",
            videoId: "0326dy_-CzM"
          }
        }
      ]
    },
    day2: {
      title: "Day 2: Back & Biceps",
      focus: "Pull Strength",
      description: "A classic 'Pull' day focusing on the lats, upper back, and biceps.",
      exercises: [
        {
          name: "Lat Pulldown",
          equipment: "Life Fitness Pulldown Station",
          sets: "3",
          reps: "10-12",
          videoId: "AOpi-p0cJkc", // SilverSneakers
          tips: [
            "Grip the bar wider than shoulder-width.",
            "Keep your chest up and lean back slightly (very slightly).",
            "Pull the bar down towards your upper chest, not your lap.",
            "Control the weight on the way up; don't let it yank you."
          ],
          mindMuscle: "Imagine pulling your elbows down into your back pockets to engage the lats.",
          type: "machine",
          alternate: {
            name: "Dumbbell Pullovers",
            equipment: "Bench + 1 Heavy Dumbbell",
            guide: "Lie across a bench (upper back only). Hold dumbbell with both hands over chest, lower it behind your head to stretch lats, then pull back over.",
            videoId: "p8YM5plSRfw"
          }
        },
        {
          name: "Seated Row",
          equipment: "Life Fitness Row Station",
          sets: "3",
          reps: "10-12",
          videoId: "irxMQ2MtZrM", // Gym Tutorial
          tips: [
            "Sit tall with chest against the pad.",
            "Pull handles towards your waist while keeping elbows close to body.",
            "Squeeze your shoulder blades together at the back."
          ],
          mindMuscle: "Feel the middle of your back contracting like you're pinching a pencil between shoulder blades.",
          type: "machine",
          alternate: {
            name: "Bent Over Dumbbell Row",
            equipment: "Dumbbells",
            guide: "Hinge at hips, keep back flat. Pull dumbbells to hips. Can be done one arm at a time using a bench for support.",
            videoId: "6TSP1TRMUzs"
          }
        },
        {
          name: "Renegade Rows",
          equipment: "Dumbbells",
          sets: "3",
          reps: "10 per side",
          videoId: "ZMW_vIWH5D8",
          tips: [
            "Start in pushup position holding dumbbells.",
            "Row one dumbbell up to your hip while balancing on the other.",
            "Keep hips square to the ground; don't twist excessively."
          ],
          mindMuscle: "Core stability and back strength.",
          type: "free_weight",
          alternate: {
            name: "Plank Rows (No weight)",
            equipment: "Mat",
            guide: "Perform the rowing motion without weight to practice stability.",
            videoId: "Q28cLuweLv4"
          }
        },
        {
          name: "Dumbbell Bicep Curls",
          equipment: "Dumbbells",
          sets: "3",
          reps: "12",
          videoId: "ykJmrZ5v0Oo", // Howcast
          tips: [
            "Stand with feet shoulder-width apart.",
            "Keep elbows glued to your sides.",
            "Rotate palms up as you lift."
          ],
          mindMuscle: "Squeeze the bicep hard at the top; control the drop.",
          type: "free_weight",
          alternate: {
            name: "Barbell Curls",
            equipment: "Barbell",
            guide: "Hold barbell with underhand grip. Curl up keeping elbows fixed. More stability allows for slightly heavier weight.",
            videoId: "dDI8ClxRS04"
          }
        },
        {
          name: "Hammer Curls",
          equipment: "Dumbbells",
          sets: "3",
          reps: "12",
          videoId: "8XLxfXROrTo",
          tips: [
            "Hold dumbbells with palms facing your body (neutral grip).",
            "Curl up without rotating your wrists.",
            "Keep elbows tucked in."
          ],
          mindMuscle: "Target the side of the arm and forearm.",
          type: "free_weight",
          alternate: {
            name: "Cross Body Hammer Curl",
            equipment: "Dumbbells",
            guide: "Curl the dumbbell across your chest towards the opposite shoulder.",
            videoId: "BRVDS6HVR9Q"
          }
        }
      ]
    },
    day3: {
      title: "Day 3: Shoulders & Abs",
      focus: "Delts & Core",
      description: "Building shoulder width (delts) and strengthening the core.",
      exercises: [
        {
          name: "Dumbbell Shoulder Press",
          equipment: "Dumbbells",
          sets: "3",
          reps: "10-12",
          videoId: "0JfYxMRsUCQ", // Exercise Guide
          tips: [
            "Sit on a bench with back support.",
            "Press dumbbells overhead until arms are extended.",
            "Lower slowly to ear level."
          ],
          mindMuscle: "Focus on the deltoids lifting the weight.",
          type: "free_weight",
          alternate: {
            name: "Standing Barbell Overhead Press",
            equipment: "Barbell",
            guide: "Stand with core tight. Press barbell from collarbone to overhead.",
            videoId: "zoN5EH50Dro"
          }
        },
        {
          name: "Dumbbell Lateral Raise",
          equipment: "Dumbbells",
          sets: "3",
          reps: "12-15",
          videoId: "-hyAJdSFzT4",
          tips: [
            "Stand tall, lift dumbbells out to the side.",
            "Keep a slight bend in elbows.",
            "Stop when arms are parallel to the floor."
          ],
          mindMuscle: "Imagine you are pouring out a pitcher of water with each hand.",
          type: "free_weight",
          alternate: {
            name: "Seated Lateral Raise",
            equipment: "Bench + Dumbbells",
            guide: "Perform the same movement while seated to remove momentum.",
            videoId: "WJm9zA2NY8E"
          }
        },
        {
          name: "Life Fitness Rear Delt Fly",
          equipment: "Life Fitness Fly/Rear Delt Machine",
          sets: "3",
          reps: "15",
          videoId: "wTFl5y8ll00", // Rear delt specific
          tips: [
            "Face the machine (chest against pad).",
            "Adjust handles for rear delt (usually inner setting).",
            "Pull arms back keeping them straight."
          ],
          mindMuscle: "Squeeze the back of your shoulders.",
          type: "machine",
          alternate: {
            name: "Bent Over Reverse Flys",
            equipment: "Light Dumbbells",
            guide: "Hinge at hips. Raise arms out to the sides like wings, squeezing rear shoulders.",
            videoId: "W_hNkKhtSJg"
          }
        },
        {
          name: "Plank",
          equipment: "Mat",
          sets: "3",
          reps: "45-60 sec",
          videoId: "pSHjTRCQxIw",
          tips: [
            "Forearms on ground, elbows under shoulders.",
            "Body in straight line from head to heels.",
            "Don't let hips sag."
          ],
          mindMuscle: "Pull belly button to spine to engage core.",
          type: "bodyweight",
          alternate: {
            name: "Hanging Leg Raises",
            equipment: "Pull-up Bar",
            guide: "Hang from bar, lift legs up to 90 degrees.",
            videoId: "Nw0LOKe3_l8"
          }
        },
        {
          name: "Crunches",
          equipment: "Mat",
          sets: "3",
          reps: "15-20",
          videoId: "Xyd_fa5zoEU",
          tips: [
            "Lower back pressed into floor.",
            "Lift shoulder blades off the floor.",
            "Don't pull on your neck."
          ],
          mindMuscle: "Contract abs to lift, don't use momentum.",
          type: "bodyweight",
          alternate: {
            name: "Cable Crunches",
            equipment: "Cable Machine + Rope",
            guide: "Kneel facing cable stack. Pull rope down by contracting abs.",
            videoId: "0KEP6A1deBE"
          }
        }
      ]
    },
    day4: {
      title: "Day 4: Legs",
      focus: "Leg Strength",
      description: "A heavy lower body day using machines for stability and free weights for range of motion.",
      exercises: [
        {
          name: "Leg Press",
          equipment: "Life Fitness Seated Leg Press",
          sets: "4",
          reps: "10-12",
          videoId: "_gIdzap4Hrg", // Hammer Strength Official
          tips: [
            "Place feet shoulder-width apart on the platform.",
            "Lower the weight until your knees are at a 90-degree angle.",
            "Push through your heels, not your toes.",
            "NEVER lock your knees at the top extension."
          ],
          mindMuscle: "Feel the tension in your quads and glutes as you push away.",
          type: "machine",
          alternate: {
            name: "Goblet Squats",
            equipment: "1 Heavy Dumbbell",
            guide: "Hold one dumbbell at chest height. Squat down keeping chest up, then drive up through heels.",
            videoId: "Xjo_fY9Hl9w"
          }
        },
        {
          name: "Leg Extension",
          equipment: "Life Fitness Leg Extension",
          sets: "3",
          reps: "12-15",
          videoId: "X8-RHRtrBpc", // Life Fitness specific
          tips: [
            "Adjust pad to rest just above your ankles.",
            "Keep your back firmly against the backrest.",
            "Extend legs fully but keep movement smooth."
          ],
          mindMuscle: "Squeeze your quadriceps (front thigh) hard at the top.",
          type: "machine",
          alternate: {
            name: "Bulgarian Split Squats",
            equipment: "Bench + Dumbbells",
            guide: "Place one foot on bench behind you. Lower hips until front knee is 90 degrees. Intense quad focus.",
            videoId: "SGHnCftrZkA"
          }
        },
        {
          name: "Seated Leg Curl",
          equipment: "Life Fitness Leg Curl",
          sets: "3",
          reps: "12-15",
          videoId: "YLJJJYOfSfc", // Life Fitness specific
          tips: [
            "Adjust the lap pad so it holds your thighs down firmly.",
            "Curl your heels down towards your glutes.",
            "Control the return phase."
          ],
          mindMuscle: "Focus on the hamstrings (back of thigh) doing the work.",
          type: "machine",
          alternate: {
            name: "Dumbbell Romanian Deadlift (RDL)",
            equipment: "Dumbbells",
            guide: "Hold dumbbells in front of thighs. Hinge hips back with slight knee bend, lowering weights until hamstring stretch, then pull hips forward.",
            videoId: "uUjqvxEWcbo"
          }
        },
        {
          name: "Dumbbell Deadlift",
          equipment: "Dumbbells",
          sets: "3",
          reps: "12",
          videoId: "c4Sj-oavbWk",
          tips: [
            "Feet hip-width apart, holding DBs in front of thighs.",
            "Hinge at hips, keep back flat, lower DBs towards floor.",
            "Drive through heels to stand up tall."
          ],
          mindMuscle: "Posterior chain (Hamstrings/Glutes/Lower Back).",
          type: "free_weight",
          alternate: {
            name: "Kettlebell Swing",
            equipment: "Kettlebell",
            guide: "Hinge at hips to swing bell between legs, then snap hips forward to swing it to chest height.",
            videoId: "JNpUNRPQkAk"
          }
        },
        {
          name: "Walking Lunges",
          equipment: "Bodyweight or Dumbbells",
          sets: "3",
          reps: "10 per leg",
          videoId: "7p6Fq7yXgK8", // Educational
          tips: [
            "Step forward and lower hips until both knees are bent at 90 degrees.",
            "Keep front knee directly above ankle.",
            "Keep torso upright."
          ],
          mindMuscle: "Feel the stretch in the trailing leg and power in the front leg.",
          type: "free_weight",
          alternate: {
            name: "Reverse Lunges (Stationary)",
            equipment: "Dumbbells",
            guide: "Instead of walking forward, step one foot backward, lower down, and return to standing. Easier on knees.",
            videoId: "D7KaRcCIQms"
          }
        }
      ]
    }
  };

  const currentPlan = workoutPlan[activeTab];
  const activeExercise = currentPlan.exercises[currentStep];

  const handleNext = () => {
    if (currentStep < currentPlan.exercises.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finished
      alert("Workout Complete! Great job!");
      setSimulatorMode(false);
      setCurrentStep(0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startSimulator = () => {
    setSimulatorMode(true);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-[100dvh] bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-lg sticky top-0 z-50 safe-top">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-300" />
            <h1 className="text-lg md:text-xl font-bold truncate">FitSim: Life Fitness</h1>
          </div>
          {simulatorMode && (
            <button 
              onClick={() => setSimulatorMode(false)}
              className="bg-blue-800/80 hover:bg-blue-700 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1 border border-blue-700/50 shadow-sm text-xs md:text-sm"
            >
              <Home className="h-4 w-4" />
              <span>Exit</span>
            </button>
          )}
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto p-4 w-full">
        
        {/* Day Selection Tabs - Only show if not in simulator mode */}
        {!simulatorMode && (
          <div className="mb-6 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {Object.keys(workoutPlan).map((dayKey) => (
                <button
                  key={dayKey}
                  onClick={() => setActiveTab(dayKey)}
                  className={`px-4 py-3 rounded-xl font-medium shadow-sm transition-all duration-200 whitespace-nowrap ${
                    activeTab === dayKey
                      ? 'bg-blue-600 text-white scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {workoutPlan[dayKey].title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Plan Overview View */}
        {!simulatorMode ? (
          <div className="space-y-6 animate-fadeIn pb-8">
            <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{currentPlan.title}</h2>
              <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <Dumbbell className="h-4 w-4 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">{currentPlan.focus}</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{currentPlan.description}</p>
              
              <button 
                onClick={startSimulator}
                className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg flex items-center justify-center space-x-2 transition-transform transform active:scale-95 touch-manipulation"
              >
                <Play className="h-5 w-5 fill-current" />
                <span>Start Interactive Session</span>
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentPlan.exercises.map((exercise, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Ex {idx + 1}</span>
                    <span className="text-gray-400 text-xs uppercase tracking-wider">{exercise.type.replace('_', ' ')}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 leading-tight">{exercise.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{exercise.equipment}</p>
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg text-sm font-mono text-gray-700">
                    <div className="flex items-center space-x-1">
                      <RotateCcw className="h-3 w-3" />
                      <span>{exercise.sets} Sets</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <RotateCcw className="h-3 w-3" />
                      <span>{exercise.reps} Reps</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 text-gray-400 text-xs flex items-center justify-center">
                <Smartphone className="h-3 w-3 mr-1" />
                <span>Tap "Share" {'>'} "Add to Home Screen" to install</span>
            </div>
          </div>
        ) : (
          /* Simulator / Active Workout Mode */
          <div className="max-w-2xl mx-auto animate-slideUp pb-24">
            
            {/* Progress Bar */}
            <div className="mb-4 flex items-center justify-between text-sm text-gray-500 font-medium">
              <span>Ex {currentStep + 1}/{currentPlan.exercises.length}</span>
              <div className="flex space-x-1">
                {currentPlan.exercises.map((_, i) => (
                  <div key={i} className={`h-1.5 w-6 rounded-full transition-colors ${i <= currentStep ? 'bg-blue-500' : 'bg-gray-200'}`} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              {/* Media Area - REPLACED IFRAME WITH THUMBNAIL LINK */}
              <div className="bg-black relative group cursor-pointer">
                {activeExercise.videoId ? (
                  <a 
                    href={`https://www.youtube.com/watch?v=${activeExercise.videoId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative aspect-video overflow-hidden"
                  >
                     {/* Thumbnail Image */}
                    <img 
                      src={`https://img.youtube.com/vi/${activeExercise.videoId}/maxresdefault.jpg`} 
                      alt={activeExercise.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 text-white rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 fill-current" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-xs md:text-sm font-bold flex items-center">
                            <Youtube className="h-4 w-4 mr-2 text-red-500" />
                            Tap to Watch on YouTube
                        </p>
                    </div>
                  </a>
                ) : (
                  <div className="aspect-video flex items-center justify-center text-gray-500 flex-col bg-gray-100">
                    <Activity className="h-12 w-12 mb-2 opacity-50" />
                    <p>No Video Available</p>
                  </div>
                )}
              </div>

              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="pr-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">{activeExercise.name}</h2>
                        <p className="text-blue-600 font-medium flex items-center text-xs md:text-sm">
                            <Dumbbell className="h-3 w-3 mr-1" />
                            {activeExercise.equipment}
                        </p>
                    </div>
                    {/* Tempo Timer Visual */}
                    <div className="flex flex-col items-center justify-center bg-blue-50 p-2 rounded-lg w-16 md:w-20 flex-shrink-0">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping mb-1"></div>
                        <span className="text-[9px] md:text-[10px] font-bold text-blue-800 uppercase tracking-widest">Tempo</span>
                    </div>
                </div>

                <div className="flex gap-3 mb-6">
                  <div className="flex-1 bg-blue-50 rounded-2xl p-3 md:p-4 text-center border border-blue-100">
                    <div className="text-[10px] text-blue-500 uppercase tracking-wide font-bold mb-1">Sets</div>
                    <div className="text-xl md:text-2xl font-black text-blue-900">{activeExercise.sets}</div>
                  </div>
                  <div className="flex-1 bg-blue-50 rounded-2xl p-3 md:p-4 text-center border border-blue-100">
                    <div className="text-[10px] text-blue-500 uppercase tracking-wide font-bold mb-1">Reps</div>
                    <div className="text-xl md:text-2xl font-black text-blue-900">{activeExercise.reps}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                      Form Checklist
                    </h4>
                    <ul className="space-y-3">
                      {activeExercise.tips.map((tip, i) => (
                        <li key={i} className="flex items-start text-gray-600 bg-gray-50 p-3 rounded-lg text-sm leading-relaxed">
                          <span className="mr-3 h-5 w-5 flex items-center justify-center rounded-full bg-white border text-[10px] font-bold text-gray-400 border-gray-200 shadow-sm flex-shrink-0">{i + 1}</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                     <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center">
                      <Activity className="h-3 w-3 mr-2" />
                      Mind-Muscle Focus
                    </h4>
                    <p className="text-amber-900 text-sm italic">
                      "{activeExercise.mindMuscle}"
                    </p>
                  </div>
                  
                  {/* Alternate Exercise Section */}
                  <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                     <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center">
                            <ArrowRightLeft className="h-3 w-3 mr-2" />
                            Alternate Option
                        </h4>
                        {activeExercise.alternate.videoId && (
                            <a 
                                href={`https://www.youtube.com/watch?v=${activeExercise.alternate.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-700 flex items-center text-[10px] font-bold bg-white px-2 py-1 rounded-full shadow-sm"
                            >
                                <Youtube className="h-3 w-3 mr-1" />
                                Watch
                            </a>
                        )}
                     </div>
                    <p className="font-bold text-gray-900 text-sm">{activeExercise.alternate.name}</p>
                    <p className="text-[10px] text-gray-500 mb-2">{activeExercise.alternate.equipment}</p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {activeExercise.alternate.guide}
                    </p>
                  </div>

                </div>
              </div>

              {/* Sticky Navigation Footer */}
              <div className="p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 flex justify-between items-center fixed bottom-0 left-0 right-0 z-40 max-w-4xl mx-auto safe-bottom">
                <button 
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`p-3 rounded-xl flex items-center space-x-2 font-bold transition text-sm ${currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="hidden md:inline">Prev</span>
                </button>
                
                <button 
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center space-x-2 transition-all transform active:scale-95 touch-manipulation text-sm md:text-base"
                >
                  <span>{currentStep === currentPlan.exercises.length - 1 ? 'Finish' : 'Next Exercise'}</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
