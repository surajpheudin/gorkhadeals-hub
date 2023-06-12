import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MDropzone from "react-dropzone";
import { FieldValues, useController } from "react-hook-form";
import { IDropzone } from "./interface";

const Dropzone = <T extends FieldValues>(props: IDropzone<T>) => {
    const {
        defaultImage,
        maxSizeInMb,
        accept = "",
        control,
        name,
        label,
    } = props;
    const [previewImageSrc, setPreviewImageSrc] = useState("");
    const [error, setError] = useState("");

    const {
        field: { onChange },
    } = useController({
        name,
        control,
    });
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
            onChange(files);
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
                cursor={"pointer"}
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
                {label && <Text mb={2}>{label}</Text>}
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
