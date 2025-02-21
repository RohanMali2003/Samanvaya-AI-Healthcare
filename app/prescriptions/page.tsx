"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"

export default function PrescriptionsPage() {
    interface Prescription {
        id: number;
        name: string;
        date: string;
        doctor: string;
        medicines: string[];
        signed: boolean;
    }

    const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null)

    const prescriptions = [
        {
            id: 1,
            name: "John Doe",
            date: "2025-02-21",
            doctor: "Dr. Emily Carter",
            medicines: ["Paracetamol 500mg", "Ibuprofen 200mg", "Vicodin 200mg"],
            signed: true,
        },
        {
            id: 2,
            name: "John Doe",
            date: "2025-02-15",
            doctor: "Dr. Emily Carter",
            medicines: ["Amoxicillin 250mg", "Vitamin D 1000 IU", "Vicodin 200mg"],
            signed: true,
        },
        {
            id: 3,
            name: "John Doe",
            date: "2025-02-10",
            doctor: "Dr. Emily Carter",
            medicines: ["Cetirizine 10mg"],
            signed: true,
        },

        {
            id: 4,
            name: "John Doe",
            date: "2025-01-29",
            doctor: "Dr. Emily Carter",
            medicines: ["Ibuprofen 200mg", "Vicodin 200mg"],
            signed: true,
        },

        {
            id: 5,
            name: "John Doe",
            date: "2025-01-19",
            doctor: "Dr. Emily Carter",
            medicines: ["Cetirizine 10mg"],
            signed: true,
        },

        {
            id: 6,
            name: "John Doe",
            date: "2025-01-10",
            doctor: "Dr. Emily Carter",
            medicines: ["Ibuprofen 200mg", "Vicodin 200mg"],
            signed: true,
        },
    ]

    return (
        <div className="relative min-h-screen">
            <Navbar />
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-8">My Prescriptions</h1>

                {/* Prescription Cards - Larger & Full Width */}
                <div className="space-y-6">
                    {prescriptions.map((prescription) => (
                        <div
                            key={prescription.id}
                            className="cursor-pointer rounded-lg border p-6 shadow-lg hover:shadow-xl transition bg-white dark:bg-gray-800 w-full text-xl"
                            onClick={() => setSelectedPrescription(prescription)}
                        >
                            <h2 className="text-2xl font-semibold">{prescription.name} - {prescription.date}</h2>
                        </div>
                    ))}
                </div>

                {/* Expanded Prescription Modal */}
                {selectedPrescription && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">
                            <h2 className="text-3xl font-semibold">{selectedPrescription.name}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">📅 Date: {selectedPrescription.date}</p>
                            <p className="mt-4 text-xl"><strong>👨‍⚕️ Doctor:</strong> {selectedPrescription.doctor}</p>
                            <p className="mt-4 text-xl"><strong>💊 Medicines:</strong></p>
                            <ul className="list-disc ml-6 text-lg">
                                {selectedPrescription.medicines.map((med, index) => (
                                    <li key={index}>{med}</li>
                                ))}
                            </ul>
                            <p className="mt-6 text-lg font-bold text-green-600">
                                ✅ Digitally signed by {selectedPrescription.doctor}
                            </p>
                            <button
                                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md text-lg"
                                onClick={() => setSelectedPrescription(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}