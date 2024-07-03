import React from "react";
import Layout from "../layout";
import Slider from "../slider/slider";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import lowerimage from "../../Assets/lowerimage.jpg";
// import { Link } from "react-router-dom";
function Home() {
  return (
    <Layout>
      <Slider />

      <section class="">
        <div class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
              <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Empowering Learners Through Engaging Online Training
              </p>
              {/* <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                Empowering Learners Through Engaging Online Training
              </p> */}
            </div>

            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/503163/api-settings.svg" /> */}
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Impact
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    We provide a vibrant online learning platform with a diverse
                    range of courses designed to equip you with the skills and
                    knowledge you need to succeed. Our satisfied learners have
                    used our training.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/503138/webpack.svg" /> */}
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      The Problem We Solve
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    In today's rapidly changing world, traditional learning
                    methods can feel restrictive. We understand the challenges
                    of busy schedules, geographical limitations, and the need
                    for flexible learning options
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" /> */}
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Meet the Experts
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Our team is comprised of passionate instructors and industry
                    veterans with a wealth of experience. You can learn more
                    about our team on our dedicated page!
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" /> */}
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Learning Designed for You
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    We believe in engaging and interactive online training.
                    Whether you're a visual learner, an auditory learner, or a
                    hands-on learner, we have a training approach that caters to
                    your style.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gray-100">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              {/* <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2> */}
              <p class="mt-4 text-gray-600 text-lg">
                At Educter, we're passionate about making high-quality,
                impactful training accessible to everyone. We believe that
                online learning offers a powerful way to gain in-demand skills,
                stay ahead of the curve, and unlock your full potential.
              </p>
              <div class="mt-8">
                {/* <Link
                  to="/"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span class="ml-2">&#8594;</span>
                </Link> */}
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src={lowerimage}
                alt="About Us"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      
    
    </Layout>
  );
}

export default Home;
