"use client"
import { motion } from "framer-motion"
import { Reorder } from "framer-motion"
import { useState } from "react"


export default function Home() {
  const [items, setItems] = useState([0, 1, 2, 3])

  return (
    <>
      <h1 className="hover:underline text-3xl text-gray-700">framer motion experiment</h1>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (

          <Reorder.Item key={item} value={item}>
            <div className="p-12 border border-2-black w-[40px] fill-white">
              {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group></>
  )
}
