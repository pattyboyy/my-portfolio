'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

export default function BlogCard({ post }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readingTime}</span>
        </div>
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          <span className="mr-2">Read More</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}