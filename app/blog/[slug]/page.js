'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function BlogPost({ params }) {
  // In a real app, you would fetch the blog post data based on the slug
  const post = {
    title: 'Getting Started with React',
    content: 'Your blog post content here...',
    date: '2024-01-15',
    author: {
      name: 'Your Name',
      image: '/api/placeholder/100/100'
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 mb-8">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-gray-900 dark:text-white font-medium">
                {post.author.name}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {post.date}
              </div>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>
        </motion.div>
      </article>
    </div>
  )
}