"use client"
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import React from "react"

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Agrimzz" target="_blank">
            <IconBrandGithub size={24} color="white" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/agrim-pradhananga-83690b278/"
            target="_blank"
          >
            <IconBrandLinkedin size={24} color="white" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/__agrim__/" target="_blank">
            <IconBrandInstagram size={24} color="white" />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2024 Agrim. All rights reserved</p>
    </section>
  )
}

export default Footer
