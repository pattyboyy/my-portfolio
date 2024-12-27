'use client'

import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    // Add more projects here
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}