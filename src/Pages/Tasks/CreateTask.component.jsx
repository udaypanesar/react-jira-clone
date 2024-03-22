/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "./Task.Slice";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { ChevronUp, ChevronDown, ChevronsUp, Check, Bookmark, CircleAlert } from "lucide-react";
import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";

const CreateTask = () => {
  const [formData, setFormData] = useState(null);
  const [openModal,setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSelectInputChange = (name,value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSaveClick = () => {
    console.log(formData);
    dispatch(createTask(formData));
    setOpenModal(false)
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button variant="secondary" size="sm">
            Create Issue
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] sm:max-h-[calc(100dvh_-_2rem)] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-600 pb-4">Create Issue</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 ">
            <div className="grid w-full gap-2">
              <Label>Issue Type</Label>
              <Select name="uType" onValueChange={(value)=>onSelectInputChange('uType',value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Story">
                    <div className="flex items-center gap-2">
                      <Bookmark color="white" strokeWidth={3} size={16} className="bg-[#68bc3c] p-0.5 rounded-sm" />
                      <span>Story</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Task">
                    <div className="flex items-center gap-2">
                      <Check color="white" strokeWidth={3} className="bg-[#4bade8] p-0.5 w-4 h-4 rounded-sm" />
                      <span>Task</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Bug">
                    {" "}
                    <div className="flex items-center gap-2">
                      <CircleAlert color="white" strokeWidth={3} className="bg-[#e84c3c] p-0.5 w-4 h-4 " />
                      <span>Bug</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-2">
              <Label>Short summary</Label>
              <Input type="text" name="uSummary" onChange={onInputChange} />
              <p className="text-xs text-gray-500">Concisely summarize the issue in one or two sentences.</p>
            </div>

            <div className="grid w-full gap-2">
              <Label>Description</Label>
              <textarea
                rows="4"
                name="uDescription"
                onChange={onInputChange}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <p className="text-xs text-gray-500">Describe the issue in as much detail as you'd like..</p>
            </div>

            <div className="grid w-full gap-2">
              <Label>Reporter</Label>
              <Select name="uReporter" onValueChange={(value)=>onSelectInputChange('uReporter',value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select repoter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="User1">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5 rounded-full" src={person1} alt="Rounded avatar" />
                      <span>User1</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="User2">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5 rounded-full" src={person2} alt="Rounded avatar" />
                      <span>User2</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="User3">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5 rounded-full" src={person3} alt="Rounded avatar" />
                      <span>User3</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-2">
              <Label>Assignees</Label>
              <Select name="uTeamMember" onValueChange={(value)=>onSelectInputChange('uTeamMember',value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select repoter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="User1">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5 rounded-full" src={person1} alt="Rounded avatar" />
                      <span>User1</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="User2">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5 rounded-full" src={person2} alt="Rounded avatar" />
                      <span>User2</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="User3">
                    <div className="flex items-center gap-2">
                      <img className="w-5 h-5 rounded-full" src={person3} alt="Rounded avatar" />
                      <span>User3</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-2">
              <Label>Priority</Label>
              <Select name="uPriority" onValueChange={(value)=>onSelectInputChange('uPriority',value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select repoter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">
                    <div className="flex items-center">
                      <ChevronsUp color="red" />
                      <span>High</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Medium">
                    <div className="flex items-center">
                      <ChevronUp color="tomato" />
                      <span>Medium</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Low">
                    <div className="flex items-center">
                      <ChevronDown color="orange" />
                      <span>Low</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-1 text-xs text-gray-500">Priority in relation to other issues.</p>
            </div>
          </div>
          <DialogFooter>
            <div className="flex justify-end gap-3">
              <Button onClick={onSaveClick}>Create Issue</Button>
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTask;
