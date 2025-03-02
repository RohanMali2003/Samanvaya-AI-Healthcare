"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Diagnostics() {
    const [image, setImage] = useState<File | null>(null);
    const [audio, setAudio] = useState<File | null>(null);
    const [result, setResult] = useState<string>("");
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "audio") => {
        if (e.target.files && e.target.files.length > 0) {
            type === "image" ? setImage(e.target.files[0]) : setAudio(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        if (image) formData.append("image", image);
        if (audio) formData.append("audio", audio);

        try {
            const response = await fetch("/api/diagnostics", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setResult(data.message);
        } catch (error) {
            console.error("Error submitting files", error);
        }
    };

    return (
        <section className="container mx-auto py-12 space-y-8">
            <h2 className="text-3xl font-bold text-center">AI Diagnostics</h2>
            <div className="grid gap-6 max-w-lg mx-auto">
                {/* Bone Fracture Analysis */}
                <div className="space-y-2">
                    <label className="font-medium">Upload X-ray Image</label>
                    <Input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "image")} />
                </div>

                {/* Lung Sound Analysis */}
                <div className="space-y-2">
                    <label className="font-medium">Upload Lung Sound (WAV/MP3)</label>
                    <Input type="file" accept="audio/*" onChange={(e) => handleFileChange(e, "audio")} />
                </div>

                <Button onClick={handleSubmit} className="w-full">Analyze</Button>

                {result && (
                    <div className="p-4 bg-gray-100 rounded-md">
                        <p className="font-medium">Diagnosis Result:</p>
                        <p className="text-sm text-gray-700">{result}</p>
                    </div>
                )}
            </div>

            {/* Chatbot Section */}
            <div className="text-center">
                <Button variant="outline" onClick={() => router.push("/chatbot")}>Consult AI Chatbot</Button>
            </div>
        </section>
    );
}
