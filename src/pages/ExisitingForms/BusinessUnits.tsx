import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayCards from "@/pages/ExisitingForms/ui/DisplayCards";
import { BusinessUnit, SubBusinessUnit } from "@/models/interfaces";
import businessUnits from "@/pages/ExisitingForms/businessUnitsData";
import ClientDetail from "@/pages/ExisitingForms/ui/ClientDetail";
import EditForm from "@/pages/ExisitingForms/EditForm";
import CreateUnitModal, { FormType, FormData } from "@/pages/ExisitingForms/ui/CreateUnitModal";

const BusinessUnits = ({ onSelectItem }: { onSelectItem: (item: BusinessUnit | null) => void }) => {
  const [selectedItem, setSelectedItem] = useState<BusinessUnit | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<SubBusinessUnit | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formType, setFormType] = useState<FormType>(FormType.MISSION);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subItemName = params.get("sub");

    const subItem = subItemName ? businessUnits.flatMap((unit) => unit.subBusinessUnits || []).find((subUnit) => encodeURIComponent(subUnit.name.replace(/\s+/g, "").toLowerCase()) === subItemName) : null;

    setSelectedSubItem(subItem || null);

    const selectedItem = businessUnits.find((item) => item.id === parseInt(id || "", 10)) || null;
    setSelectedItem(selectedItem);
    onSelectItem(selectedItem);
  }, [id, onSelectItem, location.search]);

  // Handle click event on the card
  const handleItemClick = (item: BusinessUnit | SubBusinessUnit) => {
    if ("subBusinessUnits" in item) {
      setSelectedItem(item as BusinessUnit);
      onSelectItem(item as BusinessUnit);
      navigate(`/existing-forms/${item.id}`);
      setSelectedSubItem(null);
    }
  };

  const handleSubBusinessItemClick = (subItem: SubBusinessUnit) => {
    // console.log(subItem);
    const subItemName = encodeURIComponent(subItem.name.replace(/\s+/g, "").toLowerCase());
    navigate(`/existing-forms/${id}?sub=${subItemName}`);
    setSelectedSubItem(subItem);
  };

  const handleOpenCreateModal = (type: FormType) => {
    setFormType(type);
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCreateSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="block">
      <div className="container">
        {!selectedItem && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="section-title mb-0">Mission Categories</h3>
              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={() => handleOpenCreateModal(FormType.MISSION)}>
                  Create New Mission
                </button>
              </div>
            </div>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {businessUnits.map((item, index) => (
                <SwiperSlide key={index}>
                  <DisplayCards items={item} onClick={() => handleItemClick(item)} isSelected={selectedItem === item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        {selectedItem && !selectedSubItem && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="section-title mb-0">Mission Teams in {selectedItem.name}</h3>
              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={() => handleOpenCreateModal(FormType.TEAM)}>
                  Create New Team
                </button>
              </div>
            </div>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {(selectedItem?.subBusinessUnits || []).map((item, index) => (
                <SwiperSlide key={index}>
                  <DisplayCards items={item} onClick={() => handleSubBusinessItemClick(item)} isSelected={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        {selectedSubItem && (
          <>
            <h3 className="section-title mb-4">Mission Details: {selectedSubItem.name}</h3>
            <ClientDetail clientDetails={selectedSubItem} />
            <EditForm item={selectedSubItem} />
          </>
        )}

        {/* Create Unit Modal */}
        <CreateUnitModal show={showCreateModal} onHide={handleCloseCreateModal} onSubmit={handleCreateSubmit} formType={formType} title={formType === FormType.MISSION ? "Create New Mission" : "Create New Team"} />
      </div>
    </section>
  );
};

export default BusinessUnits;
