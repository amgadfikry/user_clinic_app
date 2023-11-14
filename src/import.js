//general components
import InputDiv from './components/inputDiv'
import SelectDiv from './components/selectDiv'
import Stars from './components/stars'
import AuthChecker from './components/authChecker'
import LoadingComponent from './components/loading'
import SearchBar from './components/searchBar'
import SearchResults from './components/searchResults'
import DoctorCard from './components/doctorCard'
import DoctorDateMonthly from './components/doctorDateMonthly'
// landing page sections
import Head from './landing_sections/head'
import Insurance from './landing_sections/insurance'
import Offers from './landing_sections/offers'
import Search from './landing_sections/search'
import Services from './landing_sections/services'
import Testimonial from './landing_sections/testimonials'
import SectionHeader from './landing_sections/sectionHeader'
import Navbar from './landing_sections/navbar'
import About from './landing_sections/about'
import Footer from './landing_sections/footer'
// layout

// pages
import Dashboard from './pages/dashboard'
import LandingPage from './pages/landingPage'
import ComingSoon from './pages/comingSoon'
import NotFound from './pages/notFound'
import ServerError from './pages/serverError'

// redux reducers and hooks
import { setUserData, userDataState } from './redux/profile';
import { useDispatch, useSelector } from 'react-redux';

// react-router-dom hooks
import { BrowserRouter as Router, Routes, Route, useNavigate, NavLink, Link, useLocation } from 'react-router-dom';

// constant through all app
import { baseUrl } from '../constant'

// reacts hooks
import { useRef, useState, useEffect } from 'react'

// react-cookie hook
import { useCookies, CookiesProvider } from 'react-cookie';

// icons
import { FaUserNurse, FaHandHoldingHeart, FaRegCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import { PiStethoscopeBold, PiDotsThreeOutlineVerticalFill, PiIdentificationCard } from 'react-icons/pi';
import {
  BiLogoGithub, BiSolidQuoteLeft, BiSolidQuoteRight, BiLogoSlack, BiLogoReact, BiLogoMastodon, BiLogoMicrosoftTeams,
  BiLogoMagento
} from 'react-icons/bi'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { TbCalendarPlus } from 'react-icons/tb'
import { BsArrowLeft, BsArrowRight, BsStarFill, BsStarHalf, BsStar, BsFillPersonFill } from 'react-icons/bs'
import { FaMoneyBill1Wave, FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6'

export {
  //components
  InputDiv, SelectDiv, Head, Insurance, Offers, Search, SearchResults, Services, Testimonial, SectionHeader,
  Navbar, Dashboard, LandingPage, Stars, AuthChecker, LoadingComponent, ComingSoon, NotFound, ServerError, SearchBar,
  DoctorCard, DoctorDateMonthly, About, Footer,
  //redux
  setUserData, userDataState, useDispatch, useSelector,
  //react-router-dom
  Router, Routes, Route, useNavigate, NavLink, Link, useLocation,
  //constant
  baseUrl,
  //react-cookie
  useCookies, CookiesProvider,
  //react hooks
  useRef, useState, useEffect,
  //icons
  FaUserNurse, FaHandHoldingHeart, FaRegCalendarCheck, FaShieldAlt, PiStethoscopeBold, BiLogoGithub, BiSolidQuoteLeft, BiSolidQuoteRight,
  MdNavigateNext, MdNavigateBefore, TbCalendarPlus, BsArrowLeft, BsArrowRight, BsStarFill, BsStarHalf, BsStar, PiDotsThreeOutlineVerticalFill,
  BsFillPersonFill, FaMoneyBill1Wave, PiIdentificationCard, BiLogoSlack, BiLogoReact, BiLogoMastodon, BiLogoMicrosoftTeams, BiLogoMagento,
  FaLinkedinIn, FaGithub, FaXTwitter
}