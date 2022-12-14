import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Popup from "../../components/Popup";
import searchIcon from '../../images/icons/searchIcon.svg';
import notificationIcon from '../../images/notification.svg';
import recomendationIcon from '../../images/recomendation.svg';
import uploadIcon from '../../images/upload.svg';
import { getCombinedSearchAPICall, postPlaylistAPICall, uploadFileToAWSAPICall, uploadImageAPICall } from "../../services/playlist/playlist";
import { useFormik } from "formik";
import Spinner from "../../components/Spinner";
import OverlayLoader from "../../components/OverlayLoader";
import { SketchPicker } from 'react-color'

const initialState = {
    title: '',
    description: '',
    coverArt: '',
    tracks: [],
    moods: [],
    genres: [],
    tags: [],
    featuredArtists: [],
    featureArtistValue: '',
    coverArtDominantColors: []
}

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }
    if (!values.featureArtistValue) {
        errors.featureArtistValue = 'Required';

    }
    return errors;
};



const NewPlaylist = () => {

    const [thumbnail, setThumbnail] = useState(0);
    const [artworkImagePreview, setArtworkImagePreview] = useState(null);
    const [artworkImage, setArtworkImage] = useState(null)
    const [showSavePopup, setShowSavePopup] = useState(false);
    const [showPublishPopup, setShowPublishPopup] = useState(false);
    const [trackLoading, setTrackLoading] = useState(false);
    const [tracks, setTracks] = useState([]);
    const [tagValue, setTagValue] = useState('');
    const [moodValue, setMoodValue] = useState('');
    const [genreValue, setGenreValue] = useState('');
    const [tags, setTags] = useState([]);
    const [moods, setMoods] = useState([]);
    const [genres, setGenres] = useState([]);
    const [imageLoader, setImageLoader] = useState(false);
    const [searchTrack, setSearchTrack] = useState('');
    const [primaryColor, setPrimaryColor] = useState('#fff')
    const [primaryPicker, setPrimaryPicker] = useState(false)
    const [secondaryPicker, setSeconaryPicker] = useState(false)
    const [secondaryColor, setSecondaryColor] = useState('#fff')
    const [isOverlayLoader, setIsOverlayLoader] = useState(false);

    const formik = useFormik({
        initialValues: initialState,
        validate,
        onSubmit: values => {
            handleSubmit(values);
        },
    });
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getTracks(searchTrack)
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTrack])


    const handleSubmit = async (values) => {
        if (values.featureArtistValue) {
            await getFeaterArtist(values.featureArtistValue)
        }
        formik.values.tracks =formik.values.tracks[0];
        formik.values.genres = formik.values.genres.filter((item, i, ar) => ar.indexOf(item) === i);
        formik.values.moods = formik.values.moods.filter((item, i, ar) => ar.indexOf(item) === i);
        formik.values.tags = formik.values.tags.filter((item, i, ar) => ar.indexOf(item) === i);
        formik.values.coverArtDominantColors = [primaryColor, secondaryColor];
        let _response = await postPlaylistAPICall(formik.values);

    }

    const getFeaterArtist = async (value) => {
        let _response = await getCombinedSearchAPICall(value);
        if (_response.isSuccess) {
            let _artist = [];
            _response.data.artists.forEach((element, index) => {
                _artist.push({
                    artist: element.id,
                    isMainArtist: index === 0 ? true : false,
                    sequence: index
                });
            });
            formik.values.featuredArtists = _artist;
        }
    }


    const getTracks = async (search, isLoading = true) => {
        if (isLoading) {
            setTrackLoading(true);
        }
        let _response = await getCombinedSearchAPICall(search);
        setTrackLoading(false);
        if (_response.isSuccess) {
            let _tracks = _response.data.tracks.map((track) => {
                const { id, title, description } = track.metadata;
                return {
                    id,
                    title,
                    description,
                    isAdded: false
                }
            })
            setTracks([..._tracks])
        }
    }

    const tagCombinedSearch = async (value) => {
        if (value) {
            let _tags = [...tags];
            _tags.push(value);
            setTags([..._tags]);
            setIsOverlayLoader(true);
            setTagValue('');
            let _response = await getCombinedSearchAPICall(value);
            setIsOverlayLoader(false);
            if (_response.isSuccess) {
                _response.data.tags.forEach(element => {
                    formik.values.tags.push(element.id);
                });
            }
        }
    }
    const moodCombinedSearch = async (value) => {
        if (value) {
            let _moods = [...moods];
            _moods.push(value);
            setMoods([..._moods]);
            setIsOverlayLoader(true);
            setMoodValue('');
            let _response = await getCombinedSearchAPICall(value);
            setIsOverlayLoader(false);
            if (_response.isSuccess) {
                _response.data.moods.forEach(element => {
                    formik.values.moods.push(element.id);
                });
            }
        }
    }
    const genresCombinedSearch = async (value) => {
        if (value) {
            let _genres = [...genres];
            _genres.push(value);
            setGenres([..._genres]);
            setIsOverlayLoader(true);
            setGenreValue('');
            let _response = await getCombinedSearchAPICall(value);
            setIsOverlayLoader(false);
            if (_response.isSuccess) {
                _response.data.genres.forEach(element => {
                    formik.values.genres.push(element.id);
                });
            }
        }
    }
    const handleArtWorkImage = (e) => {
        let selectedFile = e.target.files[0]

        const objectUrl = URL.createObjectURL(selectedFile)
        setArtworkImagePreview(objectUrl);
        setArtworkImage(selectedFile);
    }

    const uploadImage = async () => {
        setIsOverlayLoader(false);
        let _data = {
            fileName: new Date().getTime() + artworkImage.name,
            category: "artworks",
        }
        let _response = await uploadImageAPICall(_data);
        if (_response.isSuccess) {
            formik.values.coverArt = _response.data.fileId;
            uploadFileToAws(_response.data.presignedUrl);
        } else {
            setIsOverlayLoader(false);
        }
    }

    const uploadFileToAws = async (url) => {
        let _response = await uploadFileToAWSAPICall(url, artworkImage);
        setIsOverlayLoader(false);
    }

    const handleAddedSongs = (song, index) => {
        const _tracks = [...tracks];
        _tracks[index].isAdded = true;
        setTracks([..._tracks]);
        formik.values.tracks.push({
            track: song.id,
            sequence: formik.values.tracks.length
        });
    }

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
            >
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-full sm:col-span-8 xl:col-span-8 bg-white p-3">

                        <div className="mb-4">
                            <Input
                                placeholder={"Type a title"}
                                label={"Title"}
                                name={"title"}
                                error={formik.errors.title}
                                touched={formik.touched.title}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-4 flex gap-10">
                            <div className="flex-1">
                                <Input
                                    placeholder={"Type a description"}
                                    label={"Description"}
                                    type="textarea"
                                    numberOfRows={4}
                                    name={"description"}
                                    error={formik.errors.description}
                                    touched={formik.touched.description}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="flex-1">
                                <Input
                                    placeholder={"Add Artists here"}
                                    label={"Featured Artist(s) on Playlist"}
                                    type="textarea"
                                    name="featureArtistValue"
                                    error={formik.errors.featureArtistValue}
                                    touched={formik.touched.featureArtistValue}
                                    numberOfRows={4}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="font-bold">Select thumbnail</label>
                            <div className="flex gap-5 mt-2">
                                <div className={`border p-2 flex-1 flex gap-2 items-center cursor-pointer ${thumbnail === 0 ? 'bg-secondary' : ''} `}
                                    onClick={() => setThumbnail(0)}
                                >
                                    <span className={`h-[20px] w-[20px] rounded-full border-2  ${thumbnail === 0 ? 'bg-black' : 'border-black'} `}></span>
                                    <span className="text-sm mt-1">Use artists as thumbnail</span>
                                </div>
                                <div className={`border p-2 flex-1 flex gap-2 items-center cursor-pointer ${thumbnail === 1 ? 'bg-secondary' : ''} `}
                                    onClick={() => setThumbnail(1)}
                                >
                                    <span className={`h-[20px] w-[20px] rounded-full border-2  ${thumbnail === 1 ? 'bg-black' : 'border-black'} `}></span>
                                    <span className="text-sm mt-1">Use description as thumbnail</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="font-bold">Add tracks</label>
                            <div className="border p-3 mt-3">
                                <div className="p-3 bg-secondary">
                                    <Input
                                        className="bg-transparent shadow-none border-0 "
                                        leftIcon={searchIcon}
                                        onKeyUp={(e) => setSearchTrack(e.target.value)}
                                        placeholder="Search track"
                                    />
                                </div>
                                <div className="mt-3 h-[200px] overflow-scroll overflow-x-hidden">

                                    {
                                        !trackLoading &&
                                        tracks.map((song, index) => (
                                            <SongCard
                                                song={song}
                                                key={index}
                                                index={index}
                                                handleAddedSongs={handleAddedSongs}
                                            />
                                        ))
                                    }
                                    {
                                        trackLoading &&
                                        <div className="flex justify-center">
                                            <Spinner />
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>

                        {/* <div className="mb-4">
                            <label className="font-bold">Add similar Songs and Playlists to "Playlist Title"</label>
                            <div className="border p-3 mt-3">
                                <div className="p-3 bg-secondary">
                                    <Input leftIcon={searchIcon} className="bg-transparent shadow-none border-0 " />
                                </div>
                                <div className="mt-3 h-[200px] overflow-scroll overflow-x-hidden">
                                    {
                                        songs.map((song, index) => (

                                            <SongCard song={song} key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div> */}

                        <h5 className="font-bold text-sm mb-4">Query Musiio</h5>

                        <div className="mb-4 flex flex-col h-[270px] bg-secondary justify-center items-center">
                            <img src={recomendationIcon} className="h-[130px] mb-4" />
                            <Button title={"Let's Go"} />
                        </div>

                    </div>

                    <div className="col-span-full sm:col-span-4 xl:col-span-4 bg-white p-3">

                        <h5 className="font-bold mb-4">Playlst View</h5>
                        <h5 className="text-xs font-bold mb-4">Add/Edit Artwork </h5>
                        <div className="w-60 mx-auto mb-4">
                            <div className="h-[150px] bg-black flex justify-center items-center relative cursor-pointer">
                                <img src={artworkImagePreview || uploadIcon} className={`h-[100px] w-full ${artworkImagePreview ? 'object-cover' : 'object-contain'} `} />
                                <input type="file" name="myImage" accept="image/*" onChange={handleArtWorkImage} className="absolute h-[100%] w-[100%] opacity-0" />
                            </div>
                            <div className="h-[50px] bg-secondary flex justify-center items-center">
                                <span className="underline text-black cursor-pointer" onClick={uploadImage}>
                                    {
                                        imageLoader ?
                                            <Spinner />
                                            : 'Upload'
                                    }
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">

                                <h5 className={`text-sm font-bold text-slate-800 mb-1 `}>Enter Playlist Primary Colour </h5>
                                <div
                                    onClick={() => setPrimaryPicker((prev) => !prev)}
                                    className="h-[40px] border border-rgb(226 232 240 / var(--tw-border-opacity)) flex items-center pl-3 cursor-pointer">
                                    {primaryColor}
                                </div>
                                {
                                    primaryPicker &&
                                    <SketchPicker
                                        color={primaryColor}
                                        onChange={(color) => setPrimaryColor(color.hex)}
                                    />
                                }
                            </div>
                            <div className="mb-3">

                                <h5 className={`text-sm font-bold text-slate-800 mb-1 `}>Enter Playlist secondary Colour </h5>
                                <div
                                    onClick={() => setSeconaryPicker((prev) => !prev)}
                                    className="h-[40px] border border-rgb(226 232 240 / var(--tw-border-opacity)) flex items-center pl-3 cursor-pointer">
                                    {secondaryColor}
                                </div>
                                {
                                    secondaryPicker &&
                                    <SketchPicker
                                        color={secondaryColor}
                                        onChange={(color) => setSecondaryColor(color.hex)}
                                    />
                                }
                            </div>

                        </div>
                        <div className={"mb-4"}>
                            <h5 className={`text-sm font-bold text-slate-800 -mb-1 `}>Add Tags </h5>
                            <textarea
                                className={`form-input w-full mt-1`}
                                rows={5}
                                placeholder={"Add tags here"}
                                value={tagValue}
                                onChange={(e) => setTagValue(e.target.value)}
                                onBlur={(e) => tagCombinedSearch(e.target.value)}
                            />
                            <div className="flex gap-3">
                                {
                                    tags.map((item, index) => (
                                        <div key={index} className="pl-3 pr-3 rounded-md bg-secondary text-black">{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={"mb-4"}>
                            <h5 className={`text-sm font-bold text-slate-800 -mb-1 `}>Add Mood </h5>
                            <textarea
                                className={`form-input w-full mt-1`}
                                rows={5}
                                placeholder={"Add Mood here"}
                                value={moodValue}
                                onChange={(e) => setMoodValue(e.target.value)}
                                onBlur={(e) => moodCombinedSearch(e.target.value)}
                            />

                            <div className="flex gap-3">
                                {
                                    moods.map((item, index) => (
                                        <div key={index} className="pl-3 pr-3 rounded-md bg-secondary text-black">{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={"mb-4"}>

                            <h5 className={`text-sm font-bold text-slate-800 -mb-1 `}>Add Genres </h5>
                            <textarea
                                className={`form-input w-full mt-1`}
                                rows={5}
                                onChange={(e) => setGenreValue(e.target.value)}
                                value={genreValue}
                                onBlur={(e) => genresCombinedSearch(e.target.value)}
                                placeholder={"Add Genres here"}
                            />
                            <div className="flex gap-3">
                                {
                                    genres.map((item, index) => (
                                        <div key={index} className="pl-3 pr-3 rounded-md bg-secondary text-black">{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-between w-80 mx-auto mt-5">
                            <Button title="Save" style={"!bg-white text-black border-current"} handleClick={() => setShowSavePopup(true)} />
                            <Button type="submit" title="Publish" />
                        </div>
                    </div>

                </div>
            </form>
            {
                isOverlayLoader &&
                <OverlayLoader />
            }

            <Popup showModal={showSavePopup} setShowModal={setShowSavePopup}>
                <div className="flex flex-col min-h-[330px] justify-center items-center">
                    <h5 className="font-bold text-white mb-5">Congratulations!</h5>
                    <span className="text-secondary">Your Playlist has been saved</span>
                </div>
            </Popup>
            <Popup showModal={showPublishPopup} setShowModal={setShowPublishPopup}>
                <Publish />
            </Popup>

        </div>
    )
}
export default NewPlaylist;

const SongCard = ({ song, handleAddedSongs, index }) => {

    return (
        <div className="p-2 flex justify-between items-center mb-2 border">
            <div className="flex gap-2 items-center">
                <span className="text-sm font-bold">{song.title}</span>
                <p className="text-xs">{song.description}</p>
            </div>
            <Button
                title={song.isAdded ? "Added" : "+ Add song"}
                isDisabled={song.isAdded}
                handleClick={() => handleAddedSongs(song, index)}
                type="button"
            />
        </div>
    )
}

const Publish = () => {
    const [step, setStep] = useState(0);

    return (
        <>
            <div className="relative mt-10">
                <div className="absolute bottom-0 w-full h-px" aria-hidden="true"></div>
                <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                    <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                        <span
                            className={`block pb-3 ${step === 0 ? 'text-secondary border-secondary border-b-2' : 'text-white'} whitespace-nowrap  `}
                            onClick={() => setStep(0)}>
                            Now
                        </span>
                    </li>
                    <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                        <span className={`block pb-3 ${step === 1 ? 'text-secondary border-secondary border-b-2' : 'text-white'}  whitespace-nowrap`}
                            onClick={() => setStep(1)}
                        >Later
                        </span>
                    </li>
                </ul>
            </div>

            {
                step === 0 &&
                <>
                    <div className="flex flex-col min-h-[300px] justify-center items-center">
                        <h5 className="text-white mb-5">Your Playlist will be added to the app</h5>
                        <img src={notificationIcon} className="h-[100px] mb-8" />
                        <Button title={"Publish"} style={"bg-secondary text-black"} />
                    </div>

                </>
            }
        </>
    )
}