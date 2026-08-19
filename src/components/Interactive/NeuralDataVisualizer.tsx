import React, { useRef, useEffect, useState } from 'react';
import { soundManager } from '../../utils/audio';
import { Play, Pause, RotateCcw, Activity } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  category: string;
}

export const NeuralDataVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [optimizer, setOptimizer] = useState('Adam (Vector RAG)');
  const [nodeCount] = useState(20);
  const [epoch, setEpoch] = useState(1420);
  const [loss, setLoss] = useState(0.042);

  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    // Initialize neural network nodes
    const labels = [
      'Transformers', 'Vector DB', 'PyTorch', 'RAG Engine', 'React 19', 'TypeScript',
      'SharedMemory', 'GLSL Shader', 'FastAPI', 'Embedding', 'PostgreSQL', 'Redis Cache',
      'Web Workers', 'Instanced Mesh', 'Web Audio API', 'Next.js App', 'Docker Cluster', 'Graph Neural'
    ];

    const initialNodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      initialNodes.push({
        x: Math.random() * 550 + 20,
        y: Math.random() * 260 + 20,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        label: labels[i % labels.length],
        category: i % 3 === 0 ? 'AI/ML' : i % 3 === 1 ? 'Frontend' : 'Systems',
      });
    }
    nodesRef.current = initialNodes;
  }, [nodeCount]);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw newsprint background grid
      ctx.strokeStyle = 'rgba(24, 20, 17, 0.08)';
      ctx.lineWidth = 1;
      const step = 25;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const nodes = nodesRef.current;

      // Update positions
      if (isRunning) {
        nodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x <= 10 || node.x >= canvas.width - 10) node.vx *= -1;
          if (node.y <= 10 || node.y >= canvas.height - 10) node.vy *= -1;
        });

        setEpoch((prev) => prev + 1);
        setLoss((prev) => Math.max(0.001, prev * 0.9999 + (Math.random() - 0.5) * 0.0002));
      }

      // Draw vector connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 100) * 0.45;
            ctx.strokeStyle = nodes[i].category === 'AI/ML' ? `rgba(139, 0, 0, ${alpha})` : `rgba(24, 20, 17, ${alpha})`;
            ctx.lineWidth = (1 - dist / 100) * 2;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes & Labels
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = node.category === 'AI/ML' ? '#8b0000' : '#181411';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        // Label Text
        ctx.font = '10px "Courier Prime", monospace';
        ctx.fillStyle = '#181411';
        ctx.fillText(node.label, node.x + 8, node.y + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isRunning]);

  const addNodeAtCoords = (clientX: number, clientY: number, target: HTMLCanvasElement) => {
    soundManager.playTypewriter();
    const rect = target.getBoundingClientRect();
    const x = (clientX - rect.left) * (target.width / rect.width);
    const y = (clientY - rect.top) * (target.height / rect.height);
    nodesRef.current.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      label: `Node #${nodesRef.current.length + 1}`,
      category: 'AI/ML',
    });
  };

  return (
    <div className="border-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-3 sm:p-4 shadow-md font-typewriter text-xs my-6 max-w-full overflow-hidden">
      
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-dark)] pb-2 mb-3 gap-2">
        <div className="flex items-center gap-1.5 font-bold uppercase text-[var(--accent-red)] text-[11px] sm:text-xs">
          <Activity className="w-4 h-4 shrink-0" />
          <span>INTERACTIVE CS & AI DATA ENGINE (CANVAS)</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-[var(--text-muted)]">
          <span>EPOCH: #{epoch}</span>
          <span className="font-bold text-[var(--accent-red)]">LOSS: {loss.toFixed(4)}</span>
        </div>
      </div>

      {/* Responsive Canvas Frame */}
      <div className="relative border-2 border-[var(--border-dark)] bg-[var(--bg-primary)] overflow-hidden shadow-inner mb-3">
        <canvas
          ref={canvasRef}
          width={640}
          height={300}
          className="w-full h-56 sm:h-72 md:h-80 object-cover cursor-crosshair touch-none"
          onClick={(e) => addNodeAtCoords(e.clientX, e.clientY, e.currentTarget)}
          onTouchStart={(e) => {
            if (e.touches.length > 0) {
              addNodeAtCoords(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
            }
          }}
        />

        {/* Overlay Touch/Click Instructions */}
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-1 rounded">
          💡 TOUCH OR CLICK CANVAS TO INJECT NODE
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-[var(--bg-primary)] p-2 sm:p-2.5 border border-[var(--border-dark)]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundManager.playTypewriter();
              setIsRunning(!isRunning);
            }}
            className="flex items-center gap-1 bg-[var(--border-dark)] text-[var(--bg-primary)] px-2.5 py-1 font-bold text-xs rounded-xs hover:bg-[var(--accent-red)] transition-colors"
          >
            {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isRunning ? 'Pause' : 'Resume'}</span>
          </button>

          <button
            onClick={() => {
              soundManager.playStampEffect();
              setEpoch(1420);
              setLoss(0.042);
            }}
            className="flex items-center gap-1 border border-[var(--border-dark)] px-2 py-1 font-bold text-xs hover:bg-[var(--bg-accent)] transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Optimizer Select */}
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px]">
          <span className="font-bold uppercase text-[var(--text-muted)] hidden sm:inline">Algorithm:</span>
          <select
            value={optimizer}
            onChange={(e) => {
              soundManager.playTypewriter();
              setOptimizer(e.target.value);
            }}
            className="bg-[var(--bg-paper-card)] border border-[var(--border-dark)] px-1.5 py-0.5 font-bold text-xs"
          >
            <option value="Adam (Vector RAG)">Adam (Vector RAG)</option>
            <option value="SGD (Graph Optimization)">SGD (Graph Opt)</option>
            <option value="RMSProp (Offscreen Canvas)">RMSProp (WebGL)</option>
          </select>
        </div>
      </div>

    </div>
  );
};
