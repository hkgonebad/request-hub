import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayCards from "@/pages/ExisitingForms/ui/DisplayCards";
import { BusinessUnit, SubBusinessUnit } from "@/models/interfaces";
import businessUnits from "@/pages/ExisitingForms/businessUnitsData";
import ClientDetail from "@/pages/ExisitingForms/ui/ClientDetail";
import EditForm from "@/pages/ExisitingForms/EditForm";

const BusinessUnits = ({ onSelectItem }: { onSelectItem: (item: BusinessUnit | null) => void }) => {
  const [selectedItem, setSelectedItem] = useState<BusinessUnit | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<SubBusinessUnit | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subItemName = params.get("sub");

    const subItem = subItemName
      ? businessUnits
          .flatMap((unit) => unit.subBusinessUnits || [])
          .find((subUnit) => encodeURIComponent(subUnit.name.replace(/\s+/g, "").toLowerCase()) === subItemName)
      : null;

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

  return (
    <section className="block">
      <div className="container">
        {!selectedItem && (
          <Swiper spaceBetween={10} slidesPerView={5}>
            {businessUnits.map((item, index) => (
              <SwiperSlide key={index}>
                <DisplayCards items={item} onClick={() => handleItemClick(item)} isSelected={selectedItem === item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {selectedItem && !selectedSubItem && (
          <Swiper spaceBetween={10} slidesPerView={5}>
            {(selectedItem?.subBusinessUnits || []).map((item, index) => (
              <SwiperSlide key={index}>
                <DisplayCards items={item} onClick={() => handleSubBusinessItemClick(item)} isSelected={false} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {selectedSubItem && (
          <>
            <ClientDetail clientDetails={selectedSubItem} />

            <EditForm item={selectedSubItem} />
          </>
        )}
      </div>
    </section>
  );
};

export default BusinessUnits;
