import React from 'react';
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Boosting Team Productivity, Strategies for Success...",
      description: "Discover actionable tips to enhance team productivity and collaboration in projects.",
      image: "/images/Blogs/blog-1.svg",
      author: {
        name: "Emily Johnson",
        avatar: "/images/Blogs/avt-1.svg"
      },
      readTime: "5 Min Read",
      featured: false
    },
    {
      id: 2,
      title: "Navigating Project Scope Creep, Strategies for...",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Blogs/blog-2.svg",
      author: {
        name: "Michael Smith",
        avatar: "/images/Blogs/avt-2.svg"
      },
      readTime: "7 Min Read",
      featured: true
    },
    {
      id: 3,
      title: "Agile Methodology Demystified, A Comprehensive...",
      description: "Unlock the principles and benefits of Agile methodology for successful...",
           image: "/images/Blogs/blog-3.svg",
      author: {
        name: "Sarah Davis",
         avatar: "/images/Blogs/avt-3.svg"
      },
      readTime: "8 Min Read",
      featured: false
    }
  ];

  return (
    <section className="py-4  lg:py-20 bg-white mb-16 lg:mb-20 border-[.5px] md:border  " >
      <div className=" ">
        
        {/* Header */}
        <div className="text-center mb-6 lg:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border-[0.5px] md:border border-gray-200 w-fit">
            <FileText className="w-4 h-4" />
            Our Blogs
          </div>
          
          <h2 className="text-3xl  lg:text-[48px] md:leading-[40px] lg:leading-[60px] font-medium text-[#0D0D0D] mb-4">
            Explore Our Blog
          </h2>
          
          <p className="text-lg px-4 md:px-0 text-[#666] max-w-3xl mx-auto leading-relaxed">
            Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-4 md:mb-12 bg-[#F6F7F9] border-[.5px] md:border  border-b-[#E7E9EF]">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white  overflow-hidden  transition-all duration-300 group cursor-pointer border-x-0  md:border-x border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Featured Post Overlay */}
                {post.featured && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="relative text-gray-900  flex items-center gap-2 ">
                      <span className="text-sm font-medium bg-white px-4 py-2   rounded-full">Open Blog</span>
                     {/* <span className=''> */}
                      <img src="/images/Blogs/Arrow Right.svg" width={10} className='absolute left-[90px] w-8 h-8 p-1 bg-white rounded-full' alt="" />
                    {/* </span> */}
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[16px] sm:text-xl font-[500] text-[#262626] mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[#666666] text-[14px] leading-relaxed mb-4">
                  {post.description}
                </p>

                {/* Author and Read Time */}
                <div className="flex items-center justify-between pt-4 border-t  border-gray-100">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-regular text-[#3D3D3D]">
                      {post.author.name}
                    </span>
                  </div>
                  
                  <span className="text-sm bg-[#F9FAFB] text-[#3D3D3D] border border-[#EDEFF3] rounded-lg px-3 py-1">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <button className="inline-flex bg-[#F9FAFB] text-[#1A1A1A] items-center gap-2  px-8 py-3 border border-[#E7E9EF] rounded-[10px]  font-medium hover:text-gray-700 transition-colors duration-300 group">
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;