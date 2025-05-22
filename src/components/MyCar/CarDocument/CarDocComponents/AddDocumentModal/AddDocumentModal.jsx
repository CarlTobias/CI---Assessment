import React, { useState } from 'react';
import {
  Box, useToast
} from "@chakra-ui/react";
import VehicleDetails from './CarDocComponents/VehicleDetails';
import DocumentList from './CarDocComponents/DocumentList';
import AddDocumentModal from './CarDocComponents/AddDocumentModal/AddDocumentModal';
import EditDocumentModal from './CarDocComponents/EditDocumentModal/EditDocumentModal';
import EditVehicleModal from './EditVehicleModal/EditVehicleModal';

const CarDocument = ({ vehicle, onDeleteVehicle, onSubmit, onViewDocuments }) => {
  const [documents, setDocuments] = useState(vehicle.documents || []);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [currentVehicle, setCurrentVehicle] = useState(vehicle);
  const [isEditVehicleModalOpen, setIsEditVehicleModalOpen] = useState(false);
  const toast = useToast();

  const handleDeleteDocument = async (docId) => {
    try {
      const res = await fetch(`http://localhost:5000/vehicles/${currentVehicle._id}/documents/${docId}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Failed to delete document');

      setDocuments(prev => prev.filter(doc => doc._id !== docId));
      toast({
        title: 'Document deleted',
        status: 'info',
        duration: 3000,
        isClosable: true
      });
    } catch (err) {
      toast({
        title: 'Error deleting document',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  const handleSubmitDocument = async (formData) => {
    const isEdit = formData.get("_id");
    const url = isEdit
      ? `/api/vehicles/${currentVehicle._id}/documents/${formData.get("_id")}`
      : `/api/vehicles/${currentVehicle._id}/documents`;
    const method = isEdit ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method,
        body: formData
      });

      if (!res.ok) throw new Error("Failed to save document");

      const updatedVehicle = await res.json();
      setDocuments(updatedVehicle.documents || []);

      toast({
        title: isEdit ? "Document updated" : "Document added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error saving document",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setEditingDocument(null);
      setIsAddModalOpen(false);
      setIsEditModalOpen(false);
    }
  };

  const handleEditDocument = (doc) => {
    setEditingDocument(doc);
    setIsEditModalOpen(true);
  };

  const handleAddDocument = () => {
    setEditingDocument(null);
    setIsAddModalOpen(true);
  };

  const handleSubmitEditVehicle = async (updatedData) => {
    try {
      const res = await fetch(`http://localhost:5000/vehicles/${currentVehicle._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) throw new Error('Failed to update vehicle');

      const updatedVehicle = await res.json();

      setCurrentVehicle(updatedVehicle); // ✅ UPDATE vehicle state here

      toast({
        title: 'Vehicle updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });


      setIsEditVehicleModalOpen(false);
    } catch (err) {
      toast({
        title: 'Error updating vehicle',
        description: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditVehicle = () => {
    setIsEditVehicleModalOpen(true);
  };

  const handleCloseEditVehicle = () => {
    setIsEditVehicleModalOpen(false);
  };

  const handleViewDocuments = (vehicleId) => {
    console.log("View documents for:", vehicleId);
    // Navigate or show documents here
  };

  

  return (
    <Box border="1px solid #e53e3e" borderRadius="lg" p={4} mb={6} position="relative">
      {/* Vehicle Info */}
      <VehicleDetails
        vehicle={currentVehicle}
        onDeleteVehicle={() => onDeleteVehicle(currentVehicle._id)}
        onEditVehicle={handleEditVehicle}
        onViewDocuments={() => handleViewDocuments(currentVehicle._id)}
      />

      {/* Document Table */}
      <DocumentList
        documents={documents}
        onEdit={handleEditDocument}
        onDelete={handleDeleteDocument}
        onAddDocument={handleAddDocument}
      />

      {/* Add Modal */}
      <AddDocumentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onEditVehicle={handleEditVehicle}
        vehicleId={currentVehicle._id}
        onSubmit={handleSubmitDocument}
      />

      {/* Edit Modal */}
      <EditDocumentModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingDocument(null);
        }}
        onSubmit={handleSubmitDocument}
        vehicleId={currentVehicle._id}
        initialData={editingDocument}
      />

      {/* Edit Vehicle Modal */}
      <EditVehicleModal
        isOpen={isEditVehicleModalOpen}
        onClose={handleCloseEditVehicle}
        onSubmit={handleSubmitEditVehicle}
        vehicle={currentVehicle}
      />
    </Box>
  );
};

export default CarDocument;
