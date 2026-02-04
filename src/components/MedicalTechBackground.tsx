import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, Pill, Stethoscope, Brain, Cpu, Database, Network, Zap } from 'lucide-react';

export function MedicalTechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Advanced particle system with medical DNA helix
    class DNAParticle {
      x: number;
      y: number;
      baseY: number;
      angle: number;
      radius: number;
      speed: number;
      color: string;
      size: number;

      constructor(x: number, angle: number) {
        this.x = x;
        this.angle = angle;
        this.baseY = canvas.height / 2;
        this.radius = 100;
        this.speed = 0.02;
        this.color = angle % 2 === 0 ? '#06b6d4' : '#ec4899';
        this.size = 4;
        this.y = this.baseY + Math.sin(this.angle) * this.radius;
      }

      update() {
        this.angle += this.speed;
        this.y = this.baseY + Math.sin(this.angle) * this.radius;
        this.x -= 0.5;
        if (this.x < -50) {
          this.x = canvas.width + 50;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, this.color + 'AA');
        gradient.addColorStop(1, this.color + '00');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Neural network nodes
    class NeuralNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: NeuralNode[];
      pulse: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        this.connections = [];
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        this.pulse += 0.05;
      }

      draw() {
        if (!ctx) return;
        
        const pulseSize = this.radius + Math.sin(this.pulse) * 1;
        
        // Outer glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 8);
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.6)');
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, pulseSize * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = '#a855f7';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#a855f7';
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Data stream particles
    class DataStream {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + this.length) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        gradient.addColorStop(0, `rgba(16, 185, 129, 0)`);
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(16, 185, 129, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    // Initialize particles
    const dnaParticles: DNAParticle[] = [];
    const neuralNodes: NeuralNode[] = [];
    const dataStreams: DataStream[] = [];

    // Create DNA helix
    for (let i = 0; i < 30; i++) {
      dnaParticles.push(new DNAParticle(i * 40, i * 0.5));
    }

    // Create neural network
    for (let i = 0; i < 50; i++) {
      neuralNodes.push(new NeuralNode());
    }

    // Create data streams
    for (let i = 0; i < 20; i++) {
      dataStreams.push(new DataStream());
    }

    // Draw neural connections
    function drawNeuralConnections() {
      if (!ctx) return;
      
      for (let i = 0; i < neuralNodes.length; i++) {
        for (let j = i + 1; j < neuralNodes.length; j++) {
          const dx = neuralNodes[i].x - neuralNodes[j].x;
          const dy = neuralNodes[i].y - neuralNodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const opacity = (1 - distance / 120) * 0.4;
            const gradient = ctx.createLinearGradient(
              neuralNodes[i].x, neuralNodes[i].y,
              neuralNodes[j].x, neuralNodes[j].y
            );
            gradient.addColorStop(0, `rgba(168, 85, 247, ${opacity})`);
            gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(neuralNodes[i].x, neuralNodes[i].y);
            ctx.lineTo(neuralNodes[j].x, neuralNodes[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Draw DNA connections
    function drawDNAConnections() {
      if (!ctx) return;
      
      for (let i = 0; i < dnaParticles.length - 1; i++) {
        const p1 = dnaParticles[i];
        const p2 = dnaParticles[i + 1];
        
        if (p1.x > 0 && p2.x > 0 && p1.x < canvas.width && p2.x < canvas.width) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
          ctx.lineWidth = 2;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Animation loop
    let animationId: number;
    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw data streams (background layer)
      dataStreams.forEach(stream => {
        stream.update();
        stream.draw();
      });
      
      // Draw neural network
      drawNeuralConnections();
      neuralNodes.forEach(node => {
        node.update();
        node.draw();
      });
      
      // Draw DNA helix
      drawDNAConnections();
      dnaParticles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Floating medical icons configuration
  const medicalIcons = [
    { Icon: Heart, color: '#ec4899', delay: 0, duration: 20, x: '10%', y: '15%' },
    { Icon: Activity, color: '#06b6d4', delay: 2, duration: 18, x: '85%', y: '20%' },
    { Icon: Brain, color: '#a855f7', delay: 4, duration: 22, x: '15%', y: '70%' },
    { Icon: Cpu, color: '#3b82f6', delay: 1, duration: 19, x: '80%', y: '75%' },
    { Icon: Database, color: '#10b981', delay: 3, duration: 21, x: '90%', y: '45%' },
    { Icon: Network, color: '#f59e0b', delay: 5, duration: 17, x: '8%', y: '45%' },
  ];

  return (
    <>
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#0f0820] to-[#0a0118]"></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-blue-900/40"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(157, 23, 77, 0.4), rgba(30, 58, 138, 0.4))',
            'linear-gradient(135deg, rgba(157, 23, 77, 0.4), rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.4))',
            'linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.4), rgba(157, 23, 77, 0.4))',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Large floating orbs with motion */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full filter blur-3xl opacity-30"
        style={{ 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6), transparent)',
          top: '10%',
          left: '5%'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full filter blur-3xl opacity-30"
        style={{ 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6), transparent)',
          bottom: '10%',
          right: '5%'
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full filter blur-3xl opacity-20"
        style={{ 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circuit board pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(6, 182, 212, 0.3) 50px, rgba(6, 182, 212, 0.3) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(236, 72, 153, 0.3) 50px, rgba(236, 72, 153, 0.3) 51px),
            repeating-linear-gradient(45deg, transparent, transparent 70px, rgba(168, 85, 247, 0.2) 70px, rgba(168, 85, 247, 0.2) 71px)
          `,
        }}
      />

      {/* Canvas for advanced animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating medical-tech icons */}
      {medicalIcons.map(({ Icon, color, delay, duration, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15, 0],
            scale: [0.8, 1.2, 0.8],
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={48} color={color} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Holographic scan lines */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.5) 2px, rgba(6, 182, 212, 0.5) 4px)',
        }}
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 1, 24, 0.8) 100%)',
        }}
      />
    </>
  );
}