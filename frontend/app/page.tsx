import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'nextFacets('react');
import { useTheme } from 'next-themes';
import MovieCard from '@/components/MovieCard';
import TagCloud from '@/components/TagCloud';
import ThemeToggle from '@/components/ThemeToggle';
import { fetchMovies } from '@/lib/tmdb';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [movieData, genreData] = await Promise.all([
        fetchMovies(),
        fetchMovies('genres'),
      ]);
      setMovies(movieData.results);
      setGenres(genreData.genres);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h1 classÚlt
