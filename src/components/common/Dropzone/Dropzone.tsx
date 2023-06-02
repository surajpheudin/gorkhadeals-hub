import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MDropzone from "react-dropzone";
import { IDropzone } from "./interface";

const Dropzone = (props: IDropzone) => {
    const { setFiles, defaultImage, maxSizeInMb, accept = "" } = props;
    const [previewImageSrc, setPreviewImageSrc] = useState("");
    const [error, setError] = useState("");

    const handleImageChange = (files: File[]) => {
        const MAX_SIZE = maxSizeInMb * 1024 * 1024;
        const size = files[0]?.size;
        if (size > MAX_SIZE) {
            setError(
                `Your image is too large; it must be less than ${maxSizeInMb} mb`
            );
        } else {
            setError("");
            setPreviewImageSrc(URL.createObjectURL(files[0]));
            setFiles(files);
        }
    };

    useEffect(() => {
        if (defaultImage) {
            setPreviewImageSrc(defaultImage);
        }
    }, [defaultImage]);

    return (
        <>
            <Box
                sx={{
                    "& section > div": {
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                    },
                }}
            >
                <MDropzone multiple={false} onDrop={handleImageChange}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} accept={accept} />
                                {previewImageSrc ? (
                                    <Image
                                        src={previewImageSrc}
                                        maxHeight="100%"
                                        objectFit={"contain"}
                                        fallbackSrc={"/png/avatar.png"}
                                    ></Image>
                                ) : (
                                    <p>
                                        Drag & drop some files here, or click to
                                        select files
                                    </p>
                                )}
                            </div>
                        </section>
                    )}
                </MDropzone>
            </Box>
            {error && (
                <Text p={0} m={0} color={"red.500"}>
                    {error}
                </Text>
            )}
        </>
    );
};
export default Dropzone;
