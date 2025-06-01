import { IoIosArrowForward } from "react-icons/io";
import "./viewStory.css";
import { useTranslation } from "react-i18next";

function ViewStory ({link} : {link : string}) {

    const { t } = useTranslation('core_components');

    return (
        <a className="view-story" href={link}>
            <p>{t("buttons.story")}</p>
            <IoIosArrowForward />

        </a>
    )
}

export default ViewStory;