"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"



export default  function SwapTransaction() {
  return (
    <div className="flex items-center justify-center min-h-screen shadow-lg shadow-purple-600">

      <Card className="w-full max-w-md bg-black border-gray-800 ">
        <CardHeader className="flex flex-row items-center space-x-4 p-6">
          <Link href="/home">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-800"
            >
              <ArrowLeft className="h-4 w-4 text-gray-400" />
            </Button>
          </Link>
          <h2 className="text-xl font-semibold text-white">Swap SOL</h2>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-900" />

          <div className="space-y-2">
            <Input
              placeholder="Address"
              className="bg-gray-900 border-gray-700 text-gray-400 placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Input
              placeholder="Amount"
              type="number"
              className="bg-gray-900 border-gray-700 text-gray-400 placeholder:text-gray-500"
            />
          </div>

          <Button className="w-full bg-gray-900 text-gray-400 hover:bg-gray-800">
            Swap
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

